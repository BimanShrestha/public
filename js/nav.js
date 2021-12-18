const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="img/bidding system.png" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search brand, product">
                    <button class="search-btn">search</button>
                </div>
                <a href="#"><img src="img/user.png" alt=""></a>
                <a href="#"><img src="img/bid.png" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="#" class="link">home</a></li>
            <li class="link-item"><a href="#" class="link">live Bids</a></li>
            <li class="link-item"><a href="#" class="link">Top bids</a></li>
            <li class="link-item"><a href="#" class="link">antique items</a></li>
            <li class="link-item"><a href="#" class="link">adout us</a></li>
        </ul>
    `;
}

createNav();