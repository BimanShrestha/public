const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
    <img src="img/bidding system.png" class="logo" alt="">
    <div class="footer-ul-container">
     <ul class="category">
        <li class="category-title">Rare</li>
        <li><a href="#" class="footer-link">Paintings</a></li>
        <li><a href="#" class="footer-link">Books</a></li>
        <li><a href="#" class="footer-link">Posters</a></li>
        <li><a href="#" class="footer-link">Clocks</a></li>
        <li><a href="#" class="footer-link">Mirrors</a></li>
        <li><a href="#" class="footer-link">Lunch Boxes</a></li>
        <li><a href="#" class="footer-link"> Decoys</a></li>
        <li><a href="#" class="footer-link">Fashion Accessories</a></li>
        <li><a href="#" class="footer-link">sports</a></li>
        <li><a href="#" class="footer-link">watch</a></li>
     </ul>
      <ul class="category">
        <li class="category-title">old</li>
        <li><a href="#" class="footer-link">Video Game Consoles</a></li>
        <li><a href="#" class="footer-link">Record</a></li>
        <li><a href="#" class="footer-link">Baseball Cards</a></li>
        <li><a href="#" class="footer-link">jeans</a></li>
        <li><a href="#" class="footer-link">Pottery</a></li>
        <li><a href="#" class="footer-link">RCA Victor Radios</a></li>
        <li><a href="#" class="footer-link">casuals</a></li>
        <li><a href="#" class="footer-link">Doll</a></li>
        <li><a href="#" class="footer-link">sports</a></li>
        <li><a href="#" class="footer-link">Comic Books</a></li>
      </ul>
      </div>
    </div>
    <p class="footer-title">about company</p>
    <p class="info">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Repellat tempore ad suscipit, eos eius quisquam sed optio nisi quaerat fugiat ratione et vero maxime praesentium, architecto minima reiciendis iste quo deserunt assumenda alias ducimus. Ullam odit maxime id voluptates rerum tenetur corporis laboriosam! Cum error ipsum laborum tempore in rerum necessitatibus nostrum nobis modi! Debitis adipisci illum nemo aperiam sed, et accusamus ut officiis. Laborum illo exercitationem quo culpa reprehenderit excepturi distinctio tempore cupiditate praesentium nisi ut iusto, assumenda perferendis facilis voluptas autem fuga sunt ab debitis voluptatum harum eum. Asperiores, natus! Est deserunt incidunt quasi placeat omnis, itaque harum?</p>
    <p class="info">support emails - help@clothing.com, customersupport@clothing.com</p>
    <p class="info">telephone - 180 00 00 001, 180 00 00 002</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">terms & services</a>
            <a href="#" class="social-link">privacy page</a>
        </div>
        <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
            <a href="#" class="social-link">twitter</a>
        </div>
    </div>
    <p class="footer-credit">Clothing, Best apparels online store</p>
    `;
}

createFooter();