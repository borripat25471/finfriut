const products = [
    // --- ผลไม้สดตามฤดูกาล ---
    { id: 1, name: 'ทุเรียนหมอนทอง', price: 350, category: 'ผลไม้สดตามฤดูกาล', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS--Vuvj1Cihw94tqF-rmbH39QdLkgUQwwVsH5U1yW1Mw&s=10' },
    { id: 2, name: 'มะม่วงน้ำดอกไม้', price: 120, category: 'ผลไม้สดตามฤดูกาล', img: 'https://images.unsplash.com/photo-1553279768-865429fa0078?w=500' },
    { id: 3, name: 'ส้มเขียวหวาน', price: 90, category: 'ผลไม้สดตามฤดูกาล', img: 'https://images.unsplash.com/photo-1611080626919-7cf5a9dbab5b?w=500' },
    { id: 4, name: 'มังคุดคัดเกรด', price: 150, category: 'ผลไม้สดตามฤดูกาล', img: 'https://images.unsplash.com/photo-1599354508493-4a112255743b?w=500' },
    { id: 5, name: 'เงาะโรงเรียน', price: 80, category: 'ผลไม้สดตามฤดูกาล', img: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500' },

    // --- ผลไม้พร้อมทาน ---
    { id: 6, name: 'มะม่วงเบาพร้อมทาน + น้ำปลาหวาน', price: 79, category: 'ผลไม้พร้อมทาน', img: 'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=500' },
    { id: 7, name: 'ฝรั่งกิมจูแช่บ๊วย', price: 60, category: 'ผลไม้พร้อมทาน', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpFykofDYAOp4gcX8FSdC965SK3aEd9L68IOy0rJEahg&s=10' },
    { id: 8, name: 'สับปะรดภูเก็ตหั่นชิ้นพร้อมทาน', price: 50, category: 'ผลไม้พร้อมทาน', img: 'https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=500' },
    { id: 9, name: 'มะละกอหวานฉ่ำพร้อมทาน', price: 45, category: 'ผลไม้พร้อมทาน', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2LSVd2jKJ4LLFc6NNdKMwj3Fq92DuLJ2kvvqTt4wulw&s=10' },
    { id: 10, name: 'แก้วมังกรแดงหวานฉ่ำ', price: 55, category: 'ผลไม้พร้อมทาน', img: 'https://images.unsplash.com/photo-1527661591475-527312dd65f5?w=500' },

    // --- น้ำผลไม้คั้นสด / สมูทตี้ ---
    { id: 11, name: 'น้ำส้มคั้นสดแท้ 100% (ไม่ผสมน้ำตาล)', price: 65, category: 'น้ำผลไม้คั้นสด / สมูทตี้', img: 'https://images.unsplash.com/photo-1613478223719-2ab802602423?w=500' },
    { id: 12, name: 'น้ำมะพร้าวน้ำหอมแท้สด', price: 50, category: 'น้ำผลไม้คั้นสด / สมูทตี้', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvKcDJNx-d6NyqKpgJSltYJK7hsSNnpKBYiMUcM9x84Q&s=10' },
    { id: 13, name: 'สมูทตี้มะม่วงปั่นโยเกิร์ต', price: 85, category: 'น้ำผลไม้คั้นสด / สมูทตี้', img: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=500' },
    { id: 14, name: 'น้ำเสาวรสแท้คั้นสด', price: 60, category: 'น้ำผลไม้คั้นสด / สมูทตี้', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpRMmsgV-HFcU4iZLin7nFHQK2NNlAA8S9Z0GbIDxIzA&s=10' },

    // --- พริกเกลือ / น้ำจิ้มแซ่บ ---
    { id: 15, name: 'พริกเกลือลาวดำสูตรเด็ด', price: 30, category: 'พริกเกลือ / น้ำจิ้มแซ่บ', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7CV6R_BSmAYY1fQXzi5llegzOaKRLFNymP733CBcDRw&s=10' },
    { id: 16, name: 'น้ำปลาหวานเข้มข้นกุ้งแน่นๆ', price: 45, category: 'พริกเกลือ / น้ำจิ้มแซ่บ', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpFykofDYAOp4gcX8FSdC965SK3aEd9L68IOy0rJEahg&s=10' },
    
];

let cart = [];
let currentCategory = 'ทั้งหมด'; // ตัวแปรจำหมวดหมู่ที่เลือกอยู่ปัจจุบัน

// ฟังก์ชันแสดงรายการสินค้า
function renderProducts(itemsToRender = products) {
    const grid = document.getElementById('productGrid');
    
    if (itemsToRender.length === 0) {
        grid.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: #888; padding: 40px 0;">ไม่พบรายการสินค้าที่ตรงกัน</p>';
        return;
    }

    grid.innerHTML = itemsToRender.map(product => `
        <div class="product-card">
            <img src="${product.img}" class="product-img" alt="${product.name}">
            <div class="product-info">
                <div class="product-title">${product.name}</div>
                <div class="product-price">฿${product.price}</div>
                <button class="add-btn" onclick="addToCart(${product.id})">
                    <i class="fa-solid fa-plus"></i> เพิ่มลงตะกร้า
                </button>
            </div>
        </div>
    `).join('');
}

// ฟังก์ชันค้นหาจากช่อง Search (ทำงานร่วมกับหมวดหมู่ที่เลือก)
function searchProducts() {
    const searchInput = document.getElementById('searchInput');
    const keyword = searchInput ? searchInput.value.trim().toLowerCase() : '';

    const filtered = products.filter(product => {
        const matchesCategory = (currentCategory === 'ทั้งหมด') || (product.category === currentCategory);
        const matchesKeyword = product.name.toLowerCase().includes(keyword);
        return matchesCategory && matchesKeyword;
    });

    renderProducts(filtered);
}

// ฟังก์ชันกรองสินค้าตามหมวดหมู่
function filterCategory(categoryName, event) {
    currentCategory = categoryName;

    // ปรับสถานะปุ่ม Active
    document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
    if (event && event.target) {
        event.target.classList.add('active');
    }

    // เรียกฟังก์ชันกรองข้อมูล
    searchProducts();
}

function addToCart(productId) {
    const item = products.find(p => p.id === productId);
    cart.push(item);
    updateCartUI();
}

function updateCartUI() {
    document.getElementById('cartCount').innerText = cart.length;
    const cartItems = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p class="empty-msg">ยังไม่มีสินค้าในตะกร้า</p>';
    } else {
        cartItems.innerHTML = cart.map((item, index) => `
            <div class="cart-item">
                <div>
                    <h4>${item.name}</h4>
                    <p style="color:#20bf6b; font-weight:bold;">฿${item.price}</p>
                </div>
                <button onclick="removeFromCart(${index})" style="background:none; border:none; color:red; cursor:pointer;">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `).join('');
    }

    const total = cart.reduce((sum, item) => sum + item.price, 0);
    document.getElementById('totalPrice').innerText = `฿${total}`;
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

function toggleCart() {
    document.getElementById('cartDrawer').classList.toggle('open');
}

function checkout() {
    if (cart.length === 0) {
        alert('กรุณาเลือกสินค้าก่อนสั่งซื้อครับ');
        return;
    }
    alert('ขอบคุณสำหรับคำสั่งซื้อผลไม้สด! ระบบได้รับรายการเรียบร้อยครับ');
    cart = [];
    updateCartUI();
    toggleCart();
}

// เรียกใช้งานครั้งแรก
renderProducts();