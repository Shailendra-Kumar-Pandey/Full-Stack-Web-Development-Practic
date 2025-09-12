/*          <div class="card">
                <div class="card-img">
                    <img src="https://d2lo0tepqt73yr.cloudfront.net/migProductImages/RC1200%20004-1.jpg" alt="Product 1">
                </div>
                <div class="card-content">
                    <h2>Red Chief</h2>
                    <p>₹ 3795</p>
                    <p>Red Chief Genuine Leather Mid Ankle Lace Up Casual Shoes For Men |RC1200 004</p>
                    <button>Add to Cart</button>
                </div>
            </div>
*/

// Sample product data
/*const products = [
    {
        "brand": "Red Chief",
        "price": 3795,
        "title": "Casual shoes",
        "desc": "Red Chief Genuine Leather Mid Ankle Lace Up Casual Shoes For Men |RC1200 004",
        "imgURL": "https://d2lo0tepqt73yr.cloudfront.net/migProductImages/RC1200%20004-1.jpg",
        "id": 1
    },
    {
        "brand": "Red Chief",
        "price": 1999,
        "title": "Casual shoes",
        "desc": "Red Chief Genuine Leather Low Ankle Lace Up Blue Casual Shoes For Men |RC3504 002",
        "imgURL": "https://d2lo0tepqt73yr.cloudfront.net/migProductImages/RC3504%20002%20(5).JPG",
        "id": 2
    },
    {
        "brand": "Red Chief",
        "price": 3143,
        "title": "Casual shoes",
        "desc": "Red Chief Low Ankle Black Lace Free Loafers with Genuine Leather for Men | RC3948 001",
        "imgURL": "https://d2lo0tepqt73yr.cloudfront.net/RC3948%20001-9_1733556524985.jpeg",
        "id": 3
    },
    {
        "brand": "Red Chief",
        "price": 1948,
        "title": "Casual shoes",
        "desc": "Red Chief Genuine Leather Casual Fit Shoes For Men |RC3472 022",
        "imgURL": "https://d2lo0tepqt73yr.cloudfront.net/migProductImages/RC3472%20022-1.JPG",
        "id": 4
    },
    {
        "brand": "Red Chief",
        "price": 1999,
        "title": "Casual shoes",
        "desc": "Red Chief Genuine Leather Low Ankle Lace Up Casual Fit Shoes For Men |RC3504 022",
        "imgURL": "https://d2lo0tepqt73yr.cloudfront.net/migProductImages/RC3504%20022%20(5).JPG",
        "id": 5
    },
    {
        "brand": "Red Chief",
        "price": 2182,
        "title": "Casual shoes",
        "desc": "Red Chief Genuine Leather Low Ankle Lace Up Black Casual Shoes For Men |RC3508 001",
        "imgURL": "https://d2lo0tepqt73yr.cloudfront.net/RC3508%20001-2_1705000774783.jpeg",
        "id": 6
    },
    {
        "brand": "Red Chief",
        "price": 4895,
        "title": "Casual shoes",
        "desc": "Red Chief Genuine Leather High Ankle Lace Up Casual Fit Shoes For Men |RC4444 737",
        "imgURL": "https://d2lo0tepqt73yr.cloudfront.net/migProductImages/RC4444%20737_1.jpg",
        "id": 7
    },
    {
        "brand": "Red Chief",
        "price": 3945,
        "title": "Casual shoes",
        "desc": "Red Chief Genuine Leather Low Ankle Lace Up Casual Fit Shoes For Men |RC2020 022",
        "imgURL": "https://d2lo0tepqt73yr.cloudfront.net/migProductImages/RC2020%20022-2.jpg",
        "id": 8
    },
    {
        "brand": "Red Chief",
        "price": 3895,
        "title": "Casual shoes",
        "desc": "Red Chief Genuine Leather Low Ankle Lace Up Casual Shoes For Men |RC1976 053",
        "imgURL": "https://d2lo0tepqt73yr.cloudfront.net/migProductImages/RC1976%20053-2.JPG",
        "id": 9
    },
    {
        "brand": "Red Chief",
        "price": 3924,
        "title": "Casual shoes",
        "desc": "Red Chief Low Ankle Lace-Up White Casual Sneakers with Genuine Leather for Men | RC3944 057",
        "imgURL": "https://d2lo0tepqt73yr.cloudfront.net/RC3944%20057-2_1732796006040.jpeg",
        "id": 10
    },
    {
        "brand": "Red Chief",
        "price": 3499,
        "title": "Loafer",
        "desc": "Red Chief Low Ankle Slip-On Tan Color Formal Leather Shoes for Men |RC3937 006",
        "imgURL": "https://d2lo0tepqt73yr.cloudfront.net/RC3937%20003-6_1740722692840.jpeg",
        "id": 11
    },
    {
        "brand": "Red Chief",
        "price": 3288,
        "title": "Loafer",
        "desc": "Red Chief Low Ankle Navy Lace-Free Loafers with Genuine Leather Stylish Shoes for Men |RC3963 156",
        "imgURL": "https://d2lo0tepqt73yr.cloudfront.net/RC3963%20156-8_1733484298287.jpeg",
        "id": 12
    },
    {
        "brand": "Red Chief",
        "price": 3293,
        "title": "Loafer",
        "desc": "Red Chief Low Ankle Green Lace Free Loafers with Genuine Leather for Men | RC3948 025",
        "imgURL": "https://d2lo0tepqt73yr.cloudfront.net/RC3948%20025-2_1732880241584.jpeg",
        "id": 13
    },
    {
        "brand": "Red Chief",
        "price": 3299,
        "title": "Loafer",
        "desc": "Red Chief Low Ankle Stylish Loafer For Men |RC3617 003",
        "imgURL": "https://d2lo0tepqt73yr.cloudfront.net/migProductImages/RC3617%20003-%20(1).JPG",
        "id": 14
    },
    {
        "brand": "Red Chief",
        "price": 2156,
        "title": "Loafer",
        "desc": "Red Chief Leather Low Ankle Slip On Tan Formal Shoes For Men |RC10080 006",
        "imgURL": "https://d2lo0tepqt73yr.cloudfront.net/RC10080%20006-10_1717498609831.jpeg",
        "id": 15
    },
    {
        "brand": "Red Chief",
        "price": 3295,
        "title": "Sneaker",
        "desc": "Red Chief Low Ankle Lace-Up Tan Color Casual Sneakers Shoes with Genuine Leather for Men |RC11080 006",
        "imgURL": "https://d2lo0tepqt73yr.cloudfront.net/RC11080%20006-1_1735020239062.jpeg",
        "id": 16
    },
    {
        "brand": "Red Chief",
        "price": 3899,
        "title": "Sneaker",
        "desc": "Red Chief Mid Ankle Lace-Up Tan Casual Sneakers with Genuine Leather for Men RC3942 006",
        "imgURL": "https://d2lo0tepqt73yr.cloudfront.net/RC3942%20006-8_1733556193554.jpeg",
        "id": 17
    },
    {
        "brand": "Red Chief",
        "price": 3699,
        "title": "Sneaker",
        "desc": "Red Chief Low Ankle Black Slip-On Casual Sneakers with Genuine Leather for Men |RC3941 001",
        "imgURL": "https://d2lo0tepqt73yr.cloudfront.net/RC3941%20001-2_1732786266002.jpeg",
        "id": 18
    },
    {
        "brand": "Red Chief",
        "price": 3924,
        "title": "Sneaker",
        "desc": "Red Chief Low Ankle Lace-Up White Casual Sneakers with Genuine Leather for Men | RC3944 057",
        "imgURL": "https://d2lo0tepqt73yr.cloudfront.net/RC3944%20057-2_1732796006040.jpeg",
        "id": 19
    },
    {
        "brand": "Red Chief",
        "price": 3195,
        "title": "Sneaker",
        "desc": "Red Chief Low Ankle Lace-Up Blie Color Casual Sneakers Shoes with Genuine Leather for Men |RC11080 002",
        "imgURL": "https://d2lo0tepqt73yr.cloudfront.net/RC11080%20002-2_1734962310186.jpeg",
        "id": 20
    },
    {
        "brand": "Nike",
        "price": 5695,
        "title": "Nike ReactX Rejuven8",
        "desc": "Men’s Recovery Shoe with soft, responsive ReactX foam – MRP ₹5,695",
        "imgURL": "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/e1849c03-7006-4ef0-b0c8-ce3dcd1d3540/NIKE+REACTX+REJUVEN8.png",
        "id": 21
    },
    {
        "brand": "Nike",
        "price": 5695,
        "title": "Nike ReactX Rejuven8 (Light Oatmeal)",
        "desc": "Same model, alternate colour – MRP ₹5,695",
        "imgURL": "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/e95ae10b-c338-4582-bda5-c932b7a31f89/NIKE+REACTX+REJUVEN8.png",
        "id": 22
    },
    {
        "brand": "Nike",
        "price": 15995,
        "title": "Nike Air Max 2017",
        "desc": "Full-length Max Air cushioning for plush comfort – MRP ₹15,995",
        "imgURL": "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/9caabd31-67b5-4ce6-84c4-b2cd35f10292/NIKE+AIR+MAX+2017.png",
        "id": 23
    },
    {
        "brand": "Nike",
        "price": 15995,
        "title": "Nike Air Max 2017 (White/Black)",
        "desc": "Alternate colourway, same model – MRP ₹15,995",
        "imgURL": "https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/9caabd31-67b5-4ce6-84c4-b2cd35f10292/NIKE+AIR+MAX+2017.png",
        "id": 24
    },
    {
        "brand": "Nike",
        "price": 7495,
        "title": "Nike Air Max 90 Premium",
        "desc": "Classic silhouette with leather overlays – estimated MRP ₹7,495",
        "imgURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/d16d5396-b678-4c4b-8b71-4d9d591912e2/AIR+MAX+TL+2.5.png",
        "id": 25
    },
    {
        "brand": "Nike",
        "price": 16995,
        "title": "Nike Air Max Plus (Men)",
        "desc": "Popular Air Max Plus model – MRP ₹14,995",
        "imgURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/a3ea3412-5646-4d99-8927-951489e3239e/AIR+MAX+TL+2.5.png",
        "id": 26
    },
    {
        "brand": "Nike",
        "price": 16995,
        "title": "Nike Air Max Dn8",
        "desc": "Dynamic Air style – MRP ₹16,995",
        "imgURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/52c1f8dd-e959-4d55-b1c0-842d06b7b1e6/WMNS+AIR+MAX+90.png",
        "id": 27
    },
    {
        "brand": "Nike",
        "price": 8495,
        "title": "Nike Air Max Alpha Trainer 6",
        "desc": "Workout shoe, Air Max tech – MRP ₹8,495",
        "imgURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/07896df1-091e-468b-89ef-72ee26c6b22d/NIKE+AIR+MAX+EXCEE.png",
        "id": 28
    },
    {
        "brand": "Nike",
        "price": 10995,
        "title": "Nike Air Max 90",
        "desc": "Iconic Air Max 90 – MRP ₹10,995",
        "imgURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7ad6d087-1374-4671-bf63-ad11b80de9e9/W+NIKE+AM+DN8.png",
        "id": 29
    },
    {
        "brand": "Nike",
        "price": 7795,
        "title": "Nike Air Max Excee",
        "desc": "Retro Air Max style – MRP ₹7,995",
        "imgURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7d121e25-ece3-4339-b1b3-113326530a37/AIR+MAX+TL+2.5.png",
        "id": 30
    },
    {
        "brand": "Nike",
        "price": 2095,
        "title": "Nike Offcourt Adjust Slide",
        "desc": "Comfort slide for casual wear – MRP ₹3,195",
        "imgURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/7950683b-d4f5-48a0-aa80-ef089b4d8e6f/M+AIR+MAX+ALPHA+TRAINER+6.png",
        "id": 31
    },
    {
        "brand": "Nike",
        "price": 4695,
        "title": "Nike ReactX Rejuven8 Slides",
        "desc": "Recovery slide with ReactX foam – MRP ₹4,695",
        "imgURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/2d064214-312e-46a9-a839-bbb4914f5f96/W+NIKE+AIR+MAX+PORTAL.png",
        "id": 32
    },
    {
        "brand": "Nike",
        "price": 17995,
        "title": "Nike Air Max TL 2.5",
        "desc": "Large Air Max tooling, rugged – MRP ₹16,995",
        "imgURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9c9fb6d8-dcf3-4600-8744-5f18437dc8b5/NIKE+AIR+MAX+PLUS+PRM.png",
        "id": 33
    },
    {
        "brand": "Nike",
        "price": 10995,
        "title": "Nike Air Max 90 Essential+",
        "desc": "Enhanced comfort Air Max 90 – approx. MRP ₹12,795",
        "imgURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9c9fb6d8-dcf3-4600-8744-5f18437dc8b5/NIKE+AIR+MAX+PLUS+PRM.png",
        "id": 34
    },
    {
        "brand": "Nike",
        "price": 13995,
        "title": "Nike Air Max Plus (Women)",
        "desc": "Air Max Plus in women’s sizing – MRP ₹14,995",
        "imgURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/66cdf9bc-7e9f-4f54-9f52-e1621a9a2f31/WMNS+AIR+MAX+90.png",
        "id": 35
    },
    {
        "brand": "Nike",
        "price": 21995,
        "title": "Paris Saint-Germain Air Max Plus Premium",
        "desc": "PSG-branded Air Max Plus – MRP ₹16,995",
        "imgURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/35c07f69-1d7a-4272-abe4-4adf4b9a9d2f/AIR+MAX+DN.png",
        "id": 36
    },
    {
        "brand": "Nike",
        "price": 13495,
        "title": "Nike Air Max 270 (India)",
        "desc": "Nike Air Max 270 popular model – current Indian MRP ₹13,495* estimated",
        "imgURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/39be44a1-eb15-4187-aded-874d2a7f6eaa/NIKE+AIR+MAX+SC+%28GS%29.png",
        "id": 37
    },
    {
        "brand": "Nike",
        "price": 11495,
        "title": "Nike Air Max VaporMax 2023 Flyknit",
        "desc": "Latest VaporMax version – MRP ₹19,295 (women’s) approx ₹14,495 men’s",
        "imgURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/772a4195-7615-4795-bd61-5a1ec2159d50/W+NIKE+AIR+MAX+PHENOMENA+SWDC.png",
        "id": 38
    },
    {
        "brand": "Nike",
        "price": 13295,
        "title": "Nike Air Max Pulse",
        "desc": "Nike Air Max Pulse – MRP ₹13,995",
        "imgURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/1a43eeb5-4579-4dbc-91b0-9fbc79608764/W+NIKE+AIR+MAX+PORTAL+SE.png",
        "id": 39
    },
    {
        "brand": "Nike",
        "price": 1795,
        "title": "Nike Victori One Slide",
        "desc": "Simple slide for casual use – approx. MRP ₹2,095",
        "imgURL": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/61e65571-dff5-4043-96fc-045486a652a7/AIR+MAX+DN8+PRM.png",
        "id": 40
    },
    {
        "brand": "Adidas",
        "price": 10999,
        "title": "Adidas Gazelle",
        "desc": "A retro sneaker with a clean, simple design, the Adidas Gazelle features a suede upper, a contrasting 3-Stripes design, and a durable rubber outsole.",
        "imgURL": "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/02e6146136d44bdfbd3f98f191f099ac_9366/Gazelle_Indoor_Shoes_Red_IE2946_04_standard.jpg",
        "id": 41
    },
    {
        "brand": "Adidas",
        "price": 7599,
        "title": "Adidas Stan Smith",
        "desc": "A timeless classic, the Adidas Stan Smith is a clean, minimalist sneaker with a smooth leather upper and a perforated 3-Stripes design. The shoe is now made with recycled materials as part of Adidas's commitment to sustainability.",
        "imgURL": "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/0a60a136c5ac444daf5aac1d010779b0_9366/Stan_Smith_Shoes_White_FX7534_01_standard.jpg",
        "id": 42
    },
    {
        "brand": "Adidas",
        "price": 9999,
        "title": "Adidas Superstar",
        "desc": "Known for its iconic shell toe, the Adidas Superstar is a legendary sneaker that has been a staple of street style for decades. It features a durable leather upper and a rubber cupsole.",
        "imgURL": "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/d355f5d568bc4e719e13fbaeecf033ad_9366/Superstar_82_Shoes_Brown_ID2148_04_standard.jpg",
        "id": 43
    },
    {
        "brand": "Adidas",
        "price": 12999,
        "title": "Adidas NMD_R1",
        "desc": "A futuristic sneaker with a comfortable design, the Adidas NMD_R1 features a stretchy knit upper, a responsive BOOST midsole, and signature NMD plugs for a unique look.",
        "imgURL": "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/78ecb1d0574b434591faaf56016c5f9f_9366/NMD_R1_Shoes_Blue_IE2280_04_standard.jpg",
        "id": 44
    },
    {
        "brand": "Adidas",
        "price": 11999,
        "title": "Adidas Forum Low",
        "desc": "A classic basketball sneaker from the 80s, the Adidas Forum Low features a durable leather upper, a padded collar, and a signature hook-and-loop strap for a secure fit.",
        "imgURL": "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/67a5245996f44aa39e00f77af3548817_9366/Forum_Low_CL_Shoes_White_IH7829_01_standard.jpg",
        "id": 45
    },
    {
        "brand": "Adidas",
        "price": 8999,
        "title": "Adidas Ultraboost 22",
        "desc": "Designed for long-distance running, the Adidas Ultraboost 22 features a responsive BOOST midsole and a Primeknit upper for a comfortable, sock-like fit. The shoe is made with Parley Ocean Plastic.",
        "imgURL": "https://img.tatacliq.com/images/i12/437Wx649H/MP000000018605512_437Wx649H_202308061626081.jpeg",
        "id": 46
    },
    {
        "brand": "Adidas",
        "price": 14999,
        "title": "Adidas Yeezy Boost 350 V2",
        "desc": "A highly sought-after sneaker with a unique design, the Adidas Yeezy Boost 350 V2 features a Primeknit upper, a responsive BOOST midsole, and a translucent rubber outsole.",
        "imgURL": "https://crepdogcrew.com/cdn/shop/files/EditsbyAhmar01_57b3126b-b12c-4e01-8c82-6afac5cbed48.png?v=1755096822&width=800",
        "id": 47
    },
    {
        "brand": "Adidas",
        "price": 8599,
        "title": "Adidas Grand Court",
        "desc": "A classic tennis-inspired sneaker with a smooth synthetic leather upper, a cushioned insole, and a durable rubber outsole for a comfortable and stylish ride.",
        "imgURL": "https://m.media-amazon.com/images/I/51ktQaHeNKL._SY675_.jpg",
        "id": 48
    },
    {
        "brand": "Adidas",
        "price": 10599,
        "title": "Adidas Continental 80",
        "desc": "A retro-inspired sneaker with a simple design, the Adidas Continental 80 features a soft leather upper, a split rubber cupsole, and a two-tone stripe for a vintage look.",
        "imgURL": "https://m.media-amazon.com/images/I/61Eco+n9wZL._SX695_.jpg",
        "id": 49
    },
    {
        "brand": "Adidas",
        "price": 9599,
        "title": "Adidas Lite Racer Adapt 4.0",
        "desc": "A lightweight and comfortable sneaker with a slip-on design. The Adidas Lite Racer Adapt 4.0 features a stretchy knit upper, a cushioned midsole, and a durable rubber outsole.",
        "imgURL": "https://img.tatacliq.com/images/i7/437Wx649H/MP000000010859581_437Wx649H_202110091057531.jpeg",
        "id": 50
    },
    {
        "brand": "Adidas",
        "price": 13999,
        "title": "Adidas Alphabounce+",
        "desc": "A versatile running shoe with a comfortable feel. The Adidas Alphabounce+ features a seamless FORGEDMESH upper and a BOUNCE midsole for a responsive and flexible ride.",
        "imgURL": "https://assets-jiocdn.ajio.com/medias/sys_master/root/20240104/zWZO/6596cf06ddf779151903246d/-473Wx593H-469584662-white-MODEL.jpg",
        "id": 51
    },
    {
        "brand": "Adidas",
        "price": 11599,
        "title": "Adidas Swift Run 22",
        "desc": "A lightweight and comfortable running shoe with a simple design. The Adidas Swift Run 22 features a knit upper, a cushioned EVA midsole, and a durable rubber outsole.",
        "imgURL": "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/752d09a16448450994f2747cf71042af_9366/Swift_Run_Shoes_Black_IG4704_04_standard.jpg",
        "id": 52
    },
    {
        "brand": "Adidas",
        "price": 10999,
        "title": "Adidas Ozweego",
        "desc": "A futuristic sneaker with a bold design, the Adidas Ozweego features a textile and suede upper, a cushioned EVA midsole, and a unique silhouette.",
        "imgURL": "https://img.tatacliq.com/images/i16//437Wx649H/MP000000021245456_437Wx649H_202402182013391.jpeg",
        "id": 53
    },
    {
        "brand": "Adidas",
        "price": 12599,
        "title": "Adidas ZX 22 BOOST",
        "desc": "A modern running shoe with a retro feel, the Adidas ZX 22 BOOST features a suede and mesh upper, a responsive BOOST midsole, and a durable rubber outsole.",
        "imgURL": "https://assets-jiocdn.ajio.com/medias/sys_master/root/20230104/lwMz/63b5a75aaeb269659c245ede/-473Wx593H-469206813-blue-MODEL.jpg",
        "id": 54
    },
    {
        "brand": "Adidas",
        "price": 9999,
        "title": "Adidas Cloudfoam Pure",
        "desc": "A lightweight and comfortable sneaker with a slip-on design. The Adidas Cloudfoam Pure features a knit upper and a cushioned Cloudfoam midsole for a soft feel.",
        "imgURL": "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/c173a897075943af9b9e652b59ac0c1f_9366/CLOUDFOAM_COMFY_LE_1_Black_JL4517_04_standard.jpg",
        "id": 55
    },
    {
        "brand": "Adidas",
        "price": 8999,
        "title": "Adidas Questar 2.0",
        "desc": "A versatile running shoe with a comfortable feel. The Adidas Questar 2.0 features a breathable mesh upper, a cushioned EVA midsole, and a durable rubber outsole.",
        "imgURL": "https://img.tatacliq.com/images/i15//437Wx649H/MP000000020828580_437Wx649H_202401191304301.jpeg",
        "id": 56
    },
    {
        "brand": "Adidas",
        "price": 10999,
        "title": "Adidas Duramo 10",
        "desc": "A durable and comfortable running shoe with a lightweight design. The Adidas Duramo 10 features a breathable mesh upper, a cushioned LIGHTMOTION midsole, and a durable rubber outsole.",
        "imgURL": "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/15adb08af87c4a709affa8e8ee2d7095_9366/Duramo_SL2_Shoes_Blue_JL2647_04_standard.jpg",
        "id": 57
    },
    {
        "brand": "Adidas",
        "price": 11999,
        "title": "Adidas Response Super 3.0",
        "desc": "A responsive and comfortable running shoe with a supportive design. The Adidas Response Super 3.0 features a mesh upper, a cushioned Adibounce midsole, and a durable rubber outsole.",
        "imgURL": "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/284fc57ae5fd4cbfa5e1af5e014670ad_9366/Response_Super_3.0_Shoes_Black_HP5933_04_standard.jpg",
        "id": 58
    },
    {
        "brand": "Adidas",
        "price": 7999,
        "title": "Adidas Advantage",
        "desc": "A classic tennis-inspired sneaker with a smooth synthetic leather upper, a cushioned insole, and a durable rubber outsole for a comfortable and stylish ride.",
        "imgURL": "https://img.tatacliq.com/images/i13/437Wx649H/MP000000019480441_437Wx649H_202309282221591.jpeg",
        "id": 59
    },
    {
        "brand": "Adidas",
        "price": 9599,
        "title": "Adidas X_PLR",
        "desc": "A lightweight and comfortable sneaker with a sporty design. The Adidas X_PLR features a breathable mesh upper, a cushioned EVA midsole, and a durable rubber outsole.",
        "imgURL": "https://assets.adidas.com/images/h_2000,f_auto,q_auto,fl_lossy,c_fill,g_auto/a2d5c7fa497e4fbc8eb0a905b87c04ad_9366/X_PLRPHASE_Shoes_Black_ID2715_04_standard.jpg",
        "id": 60
    },
    {
        "brand": "Jordan",
        "price": 14527,
        "title": "jordan Jumpman MVP Men's",
        "descrip": "iconic sportswear",
        "imgURL": "https://images-cdn.ubuy.co.in/687378ae5f4f7b87120e2e3f-jordan-mvp-mens-shoes.jpg",
        "id": 61
    },
    {
        "brand": "Jordan",
        "price": 10917,
        "title": "Air Jordan 1 Mens Mid",
        "descrip": "sportswear",
        "imgURL": "https://static.nike.com/a/images/t_prod/w_1920,c_limit/17d4db6e-edbe-4812-ba68-123bb201b928/meet-michael-jordan-s-newest-signature-shoe-the-air-jordan-xxxix.jpg",
        "id": 62
    },
    {
        "brand": "Jordan",
        "price": 19495,
        "title": "Nike Men's Air Jordan 4 Retro",
        "descrip": "Retro Shoes",
        "imgURL": "https://sneakerzone.it/cdn/shop/files/2dHI4ODvauv9vbaNAir-Jordan-4-Retro-Fear-2024-Product.jpg?v=1734553991",
        "id": 63
    },
    {
        "brand": "Jordan",
        "price": 10918,
        "title": "Jordan Max Aura 6 Men's Shoes",
        "descrip": "a silhouette that adds history and heritage to your fit and is ready for whatever you get into.",
        "imgURL": "https://static.nike.com/a/images/w_1280,q_auto,f_auto/a2ee0db7-be80-4b0e-8c08-5a7f2d71f83c/air-jordan-1-mid-se-white-and-black-dh6933-100-release-date.jpg",
        "id": 64
    },
    {
        "brand": "Jordan",
        "price": 12840,
        "title": "Nike Men's jordan Sneakers",
        "descrip": "Retro Shoes",
        "imgURL": "https://justfreshkicks.com/wp-content/uploads/2021/08/Air-Jordan-4-DIY-Kids-DC4101-100-Release-Date-4.jpeg",
        "id": 65
    },
    {
        "brand": "Jordan",
        "price": 8575,
        "title": "Kids Air Jordan 4",
        "descrip": "Kids Shoes",
        "imgURL": "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSiiEymMxn9MCwMU2CqLy6eG6k6w27RDAlkgLTQPlFd-6yj4NoreZPIIjqSgS54ULLUkvRlEshKRLDCU7kUCeF93gg_t0h8LhuC4LatmRHx9w9FTrO8myxIbA",
        "id": 66
    },
    {
        "brand": "Addidas",
        "price": 1350,
        "title": "adidas Fluento M Running Shoes For",
        "descrip": "formal shoes",
        "imgURL": "https://brand.assets.adidas.com/image/upload/PAC_ORIGINALS_SHOES_PLP_IWP_TILE_CAMPUS_5e49714426.jpg",
        "id": 67
    },
    {
        "brand": "Addidas",
        "price": 9990,
        "title": "adidas Originals Superstar II",
        "descrip": "formal shoes",
        "imgURL": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/3baa2f1ace904af8a11fdac4c624521e_9366/forum-low-cl-shoes.jpg",
        "id": 68
    },
    {
        "brand": "Addidas",
        "price": 8999,
        "title": "adidas Men Ultraboost 1.0 US",
        "descrip": "sport shoes",
        "imgURL": "https://t4.ftcdn.net/jpg/05/30/14/23/360_F_530142333_e0J6JBtkZzjTFpTIBpHa8LgAgXkL8wnt.jpg",
        "id": 69
    },
    {
        "brand": "Addidas",
        "price": 5000,
        "title": "Adidas Adizero Boston 12",
        "descrip": "Running shoes",
        "imgURL": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/7a8181bb376f47fbbb0d2ae516fdb143_9366/pureboost-5-running-shoes.jpg",
        "id": 70
    },
    {
        "brand": "Puma",
        "price": 10999,
        "title": "Puma Mostro Sneakers",
        "descrip": "sneakers",
        "imgURL": "https://media.landmarkshops.in/cdn-cgi/image/h=550,w=550,q=85,fit=cover/lifestyle/1000013708258-Black-Black-1000013708258_01-2100.jpg",
        "id": 71
    },
    {
        "brand": "Puma",
        "price": 10220,
        "title": "Puma men's lesup sneaker",
        "descrip": "Sneakers",
        "imgURL": "https://sportsstation.in/cdn/shop/files/Cell-Thrill-Unisex-Running-Shoes.jpg?v=1756101933",
        "id": 72
    },
    {
        "brand": "Puma",
        "price": 2340,
        "title": "Puma Men fire v2",
        "descrip": "casual shoes",
        "imgURL": "https://assets.myntassets.com/w_412,q_30,dpr_3,fl_progressive,f_webp/assets/images/19348154/2025/2/5/db6b9e63-6917-4b12-a1bd-6bd15237344e1738760991222-Puma-Men-Blue-Colourblocked-Fire-V2-Sneakers-576173876099075-1.jpg",
        "id": 73
    },
    {
        "brand": "deckers brands",
        "price": 2344,
        "title": "BLACK+DECKER Men's High Ankle Safety Shoes",
        "descrip": "high Ackle + Less Up Shoes",
        "imgURL": "https://karamonline.com/media/catalog/product/cache/b84c5b330a8934593c25024fe8b9ba8e/b/x/bxwb0168in-01_1_2.jpg",
        "id": 74
    },
    {
        "brand": "deckers brands",
        "price": 5755,
        "title": "BLACK+DECKER industial",
        "descrip": "high Ackle",
        "imgURL": "https://karamonline.com/media/catalog/product/cache/509850b11aa2210ac1d2c31fec93d22f/b/x/bxwb0166in-01.jpg",
        "id": 75
    },
    {
        "brand": "deckers brands",
        "price": 7000,
        "title": "BLACK+DECKER Oil Resistance",
        "descrip": "high Ackle Premium",
        "imgURL": "https://karamonline.com/media/catalog/product/cache/b84c5b330a8934593c25024fe8b9ba8e/b/x/bxwb0167in-01.jpg",
        "id": 76
    },
    {
        "brand": "Nike",
        "price": 5340,
        "title": "Nike Men's Court Shot Shoes",
        "descrip": "Premium Sport Shoes",
        "imgURL": "https://www.walkaroo.in/cdn/shop/files/1_2306b3e5-1a34-4f1b-b822-3a921b8f323e.jpg?v=1753514867",
        "id": 77
    },
    {
        "brand": "Nike",
        "price": 1099,
        "title": "Men's Lace-up Casual Shoes - WS97538 Navy Blue Grey - 8",
        "descrip": "Lace-up Shoes",
        "imgURL": "https://www.walkaroo.in/cdn/shop/files/08_23c2e4d6-9d9c-4f0f-a815-2ca089c5b1ee.jpg?v=1753514982&width=1600",
        "id": 78
    },
    {
        "brand": "Nike",
        "price": 8999,
        "title": "Nike Ultraboost 23 Black Green Stuff Factory",
        "descrip": "Running Premium",
        "imgURL": "https://assets.adidas.com/images/w_383,h_383,f_auto,q_auto,fl_lossy,c_fill,g_auto/7a8181bb376f47fbbb0d2ae516fdb143_9366/pureboost-5-running-shoes.jpg",
        "id": 79
    },
    {
        "brand": "Nike",
        "price": 4599,
        "title": "Nike Men's Downshifter 13 Road",
        "descrip": "Running Shoes",
        "imgURL": "https://i.ebayimg.com/images/g/w2MAAOSwRxpkz-nJ/s-l400.jpg",
        "id": 80
    }
]*/




// localStorage.setItem("product",JSON.stringify(products));   //storing data in local storage



let product = JSON.parse(localStorage.getItem("product")) || [];     //getting data from local storage
// console.log(product);
// console.log(product.length);





function element(ele){

   ele.forEach(function(ele, i){

    

    let addCard = document.getElementById("addCard");


    let card = document.createElement("div");
    card.setAttribute("class", "card");

    let cardImg = document.createElement("div");
    cardImg.setAttribute("class", "card-img");

    let img = document.createElement("img");
    img.src = ele.imgURL;
    img.title = ele.title;

    cardImg.appendChild(img);
    card.appendChild(cardImg);

    let cardContent = document.createElement("div");
    cardContent.setAttribute("class", "card-content");

    let h2 = document.createElement("h2");
    h2.innerText = ele.brand;

    let h3 = document.createElement("h3");
    h3.innerHTML = `₹ ${ele.price} <span><strike> ₹ ${ele.price+1999}</strike></span>`;

    let p = document.createElement("p");
    p.innerText = ele.desc.slice(0, 50) + "...";

    let button = document.createElement("button");
    button.innerText = "Add to Cart";

    cardContent.appendChild(h2);
    cardContent.appendChild(h3);
    cardContent.appendChild(p);
    cardContent.appendChild(button);

    card.appendChild(cardContent);



    addCard.appendChild(card);

});
console.log(ele)
}


element(product);