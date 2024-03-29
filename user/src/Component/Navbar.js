import React from 'react'

function Navbar() {
  return (
    <div>
        <nav class="navbar fixed-top navbar-expand-md navbar-light bg-white">
            <div class="container-fluid">
                <button
                    class="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                <i class="fas fa-bars"></i>
                </button>

                <a class="navbar-brand mt-2 mt-md-0" href="/">DARD</a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-md-0">
                        <li class="nav-item">
                            <a class="nav-link" href="/">Sign In</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">Sign Up</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="/">Courses</a>
                        </li>
                    </ul>
                </div>

                <div class="d-flex align-items-center">
                    <div class="dropdown">
                        <a
                        class="link-secondary me-3 dropdown-toggle hidden-arrow"
                        href="/"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                        >
                        <i class="fas fa-bell"></i>
                        <span class="badge rounded-pill badge-notification bg-danger">1</span>
                        </a>
                        <ul
                        class="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbarDropdownMenuLink"
                        >
                        <li>
                            <a class="dropdown-item" href="/">Some news</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="/">Another news</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="/">Something else here</a>
                        </li>
                        </ul>
                    </div>
                    <div class="dropdown">
                        <a
                        class="dropdown-toggle d-flex align-items-center hidden-arrow"
                        href="/"
                        id="navbarDropdownMenuAvatar"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                        >
                        <img
                            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                            class="rounded-circle"
                            height="25"
                            alt="Black and White Portrait of a Man"
                            loading="lazy"
                        />
                        </a>
                        <ul
                        class="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbarDropdownMenuAvatar"
                        >
                        <li>
                            <a class="dropdown-item" href="/">My profile</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="/">Settings</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="/">Logout</a>
                        </li>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>
    </div>
  )
}

export default Navbar