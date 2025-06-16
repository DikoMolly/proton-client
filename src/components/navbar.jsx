import React, { useState, useCallback, useRef } from 'react';
import debounce from 'lodash.debounce';
import { Dialog } from 'primereact/dialog';
import { ProgressSpinner } from 'primereact/progressspinner';
import { searchProducts } from '../services/productservice';
import './App.css';
import '../App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGift, faUser, faHeart, faBasketShopping, faMagnifyingGlass, faBars } from '@fortawesome/free-solid-svg-icons';


function Navbar() {
    const [query, setQuery] = useState('');

    const [results, setResults] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const currentQuery = useRef(''); // 🔁 Track the latest input

    const fetchResults = useCallback(
        debounce(async (value) => {
            if (!value.trim()) return;

            setLoading(true);
            try {
                const res = await searchProducts(value);

                // 🛡️ Prevent showing modal if user has cleared the input after this async call started
                if (currentQuery.current.trim() !== value.trim()) return;

                setResults(res);
                setModalVisible(true);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        }, 400),
        []
    );

    const handleInputChange = (e) => {
        const value = e.target.value;
        setQuery(value);
        currentQuery.current = value; // 🔁 Update tracked query

        if (!value.trim()) {
            setModalVisible(false);
            setResults([]);
            setLoading(false);
            return;
        }

        fetchResults(value);
    };

    return (
        <>
            <div className="Navbar">
                <div className="search_container">
                    <h1>Proton</h1>
                    <div className='flexinput'>
                        <div>
                            <FontAwesomeIcon icon={faBars} className='hamburger'/>
                        </div>
                        <div className='searchinput'>

                            <input
                                type="text"
                                placeholder="What can we help you find?"
                                value={query}
                                onChange={handleInputChange}
                            />
                            <FontAwesomeIcon icon={faMagnifyingGlass} className="search" />
                        </div>
                    </div>

                </div>
                <div className="second">
                    <div>
                        <FontAwesomeIcon icon={faGift} className="giftbox" />
                        <h2>GIFT CARDS</h2>
                    </div>
                    <div className="border1"></div>
                    <div>
                        <FontAwesomeIcon icon={faUser} className="user" />
                        <div className="check">
                            <p>Log In or </p>
                            <br />
                            <p> Sign Up</p>
                        </div>
                    </div>
                    <div className="border2"></div>
                    <div>
                        <FontAwesomeIcon icon={faHeart} className="heart" />
                        <FontAwesomeIcon icon={faBasketShopping} className="shopping" />
                    </div>
                </div>
            </div>

            {modalVisible && query.trim() && (
                <Dialog

                    visible={modalVisible}
                    style={{ width: '85vw', top: '100px' }}
                    onHide={() => setModalVisible(false)}
                    draggable={false}
                    resizable={false}
                    modal={false}
                    blockScroll={false}
                    appendTo={document.body}
                    
                >
                    {loading ? (
                        <div style={{ textAlign: 'center', padding: '2rem' }}>
                            <ProgressSpinner />
                            <p>Searching...</p>
                        </div>
                    ) : results.length === 0 ? (
                        <div style={{ textAlign: 'center', padding: '1rem' }}>
                            <p>No matching products found.</p>
                            <p>Suggestions:</p>
                            <ul style={{ listStyleType: 'disc', paddingLeft: '1.5rem', textAlign: 'left' }}>
                                <li>Check your spelling</li>
                                <li>Try more general keywords</li>
                                <li>Use fewer words</li>
                            </ul>
                        </div>
                    ) : (
                        <div className="product-grid">
                            {results.map((product) => (
                                <div key={product._id} className="product">
                                    <div className="productImage">
                                        <div className="label">
                                            <h3>{product.label}</h3>
                                        </div>
                                        <div>
                                            <img src={product.imageUrl || '/placeholder.png'} alt={product.name} style={{ width: "300px" }} />
                                        </div>
                                    </div>
                                    <div className="description">
                                        <p>{product.brand}</p>
                                        <h3>{product.name}</h3>
                                        <p>₦{product.price}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </Dialog>
            )}
        </>
    );
}

export default Navbar;
