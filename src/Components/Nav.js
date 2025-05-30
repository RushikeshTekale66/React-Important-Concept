import React from 'react';

export const Nav = () => {
    return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-info shadow-sm py-3">
            <div class="container-fluid">
                <a class="navbar-brand d-flex align-items-center" href="#">
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCZTs2HgTrIlJx9jePzPzQpTbxF3DwG2b-dA&s" height="50" width="50" class="me-2 rounded-circle" alt="Logo"/>
                        <span class="fs-4 fw-bold">PC</span>
                </a>

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul class="navbar-nav fs-4">
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">About Us</a>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle active" href="#" id="productsDropdown" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Products
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="productsDropdown">
                                <li><a class="dropdown-item" href="#">Product 1</a></li>
                                <li><a class="dropdown-item" href="#">Product 2</a></li>
                                <li><a class="dropdown-item" href="#">Product 3</a></li>
                            </ul>
                        </li>
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle active" href="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown"
                                aria-expanded="false">
                                Services
                            </a>
                            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="servicesDropdown">
                                <li><a class="dropdown-item" href="#">Service 1</a></li>
                                <li><a class="dropdown-item" href="#">Service 2</a></li>
                                <li><a class="dropdown-item" href="#">Service 3</a></li>
                            </ul>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Projects</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Pricing</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Blogs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="#">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}