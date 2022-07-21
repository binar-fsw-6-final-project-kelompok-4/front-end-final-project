import React, { useState, useEffect } from "react";
import { Container, Button, Row, Col, Card } from "react-bootstrap";
import { FiSearch } from "react-icons/fi";
import axios from "axios";


import Link from 'next/link';

function Product() {

    const [post, setPost] = useState([]);
    const [category, setCategory] = useState([""]);

    const categories = category ? `&category=${category}` : "";

    useEffect(() => {
        const postData = async () => {
            const response = await axios.get(`https://fsw6-group4-staging.herokuapp.com/api/v1/listproduct/${category}`);
            console.log(response);
            const data = await response.data.data;
            console.log(data);

            setPost(data);
        };
        postData();
    }, [categories]);

    return (
        <Container className="pt-5" id="btn-category">
            <h5>Telusuri Kategori</h5>
            <div className="button-group">
                <Button onClick={() => setCategory(null)} className="me-4 hi btn-shadow border-0">
                    <FiSearch className="me-1 mb-1" />
					Semua
				</Button>
                {/* {/* {category.map((c) =>  */}
                <Button onClick={() => setCategory("pakaian")} className="me-4 hi btn-shadow border-0">
                    <FiSearch className="me-1 mb-1" /> Pakaian
				</Button>
                <Button onClick={() => setCategory("makanan")} className="me-4 hi btn-shadow border-0">
                    <FiSearch className="me-1 mb-1" /> Makanan
				</Button>
                <Button onClick={() => setCategory("Elektronik")} className="me-4 hi btn-shadow border-0">
                    <FiSearch className="me-1 mb-1" /> Elektronik
				</Button>
            </div>
            <Container id="products" className="mt-5">
                <Row md={6}>
                    {post.map((post) =>
                        <Col md={2} key={post.id} className="mb-3 p-2" >
                            <Link href={`/produk/halamanproduk?id=${post.id}`} key={post.id}>
                                <Card  className="produk">
                                    <Card.Img variant="top" className="p-2" src={post.id} style={{ maxHeight: "100px", objectFit: "cover" }} />
                                    <Card.Body>
                                        <Card.Title className="fs-7 ">{post.product_name}</Card.Title>
                                        <p className="text-black-50 fs-8  mb-0">{post.category}</p>
                                        <Card.Text className="fs-7 ">{(post.price)}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </Col>
                    ).reverse()}
                </Row>
            </Container>
        </Container>
    );
}

export default Product;