let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}

// ==========================================================================
// 2. XỬ LÝ RANDOM 3 ẢNH LOOKBOOK (Đường dẫn đã sửa chuẩn theo folder assets)
// ==========================================================================
document.addEventListener("DOMContentLoaded", function () {
    // Đã ĐỔI từ "/assets/..." THÀNH "assets/..." để chạy đúng từ file index.html
    const allImages = [
        "assets/images/banner.jpg",
        "assets/images/banner1.jpg",
        "assets/images/banner2.jpg",
        "assets/images/banner3.jpg",
        "assets/images/banner4.jpg",
        "assets/images/banner5.jpg",
        "assets/images/banner6.jpg",
        "assets/images/banner7.jpg",
        "assets/images/banner8.jpg",
        "assets/images/banner9.jpg",
        "assets/images/banner10.jpg",
        "assets/images/banner11.jpg",
        "assets/images/banner12.jpg",
        "assets/images/banner13.jpg",
        "assets/images/banner14.jpg",
        "assets/images/banner15.jpg",
        "assets/images/banner16.jpg",
        "assets/images/banner17.jpg",
        "assets/images/banner18.jpg",
        "assets/images/banner19.jpg",
        "assets/images/banner20.jpg",
        "assets/images/banner21.jpg",
        "assets/images/banner22.jpg"
    ];

    // Thuật toán xáo trộn Fisher-Yates (Đảm bảo random đều và không trùng ảnh)
    for (let i = allImages.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [allImages[i], allImages[j]] = [allImages[j], allImages[i]];
    }

    // Chọn ra 3 tấm đầu tiên sau khi xáo trộn
    const selectedImages = allImages.slice(0, 3);

    // Lấy phần tử HTML
    const img1 = document.getElementById("editorial-img-1");
    const img2 = document.getElementById("editorial-img-2");
    const img3 = document.getElementById("editorial-img-3");

    // Đổ dữ liệu ảnh vào giao diện nếu tìm thấy thẻ
    if (img1) img1.src = selectedImages[0];
    if (img2) img2.src = selectedImages[1];
    if (img3) img3.src = selectedImages[2];
});

// ======================================================

document.addEventListener("DOMContentLoaded", function () {
    const accordionHeaders = document.querySelectorAll(".accordion-header");

    accordionHeaders.forEach(header => {
        header.addEventListener("click", function () {
            // Lấy ra khối .accordion-item cha của nút được bấm
            const parentItem = this.parentElement;

            // Toggle class 'active' (Nếu có thì xóa, nếu chưa có thì thêm)
            parentItem.classList.toggle("active");
        });
    });
});

// ===================================================================

document.addEventListener('DOMContentLoaded', () => {
    const cards = Array.from(document.querySelectorAll('.product-container .product-card'));
    const loadMoreBtn = document.getElementById('loadMoreBtn') || document.querySelector('.load-more-wrapper button');

    // CẤU HÌNH THEO YÊU CẦU:
    let visibleCount = 8;  // Số lượng hiện ban đầu
    const step = 12;       // MỖI LẦN BẤM THÊM 12 SẢN PHẨM

    // Nếu không tìm thấy nút, dừng lại
    if (!loadMoreBtn) return;

    function updateVisibility() {
        cards.forEach((card, index) => {
            if (index < visibleCount) {
                card.style.display = ''; // Nhận theo CSS (Grid)
            } else {
                card.style.display = 'none';
            }
        });

        // Ẩn nút nếu đã hiển thị hết sản phẩm
        if (visibleCount >= cards.length) {
            loadMoreBtn.style.setProperty('display', 'none', 'important');
        } else {
            loadMoreBtn.style.setProperty('display', 'inline-block', 'important');
        }
    }

    // Khởi tạo lần đầu
    updateVisibility();

    // Bắt sự kiện Click
    loadMoreBtn.addEventListener('click', (e) => {
        e.preventDefault();

        // Tăng số lượng hiển thị thêm 12 đơn vị
        visibleCount += step;

        updateVisibility();
    });
});


// ===========================================
document.addEventListener('DOMContentLoaded', function () {
    const qtyButtons = document.querySelectorAll('.qty-btn button');

    qtyButtons.forEach(button => {
        button.addEventListener('click', function () {
            const span = this.parentElement.querySelector('span');
            let count = parseInt(span.innerText);

            if (this.innerText === '+') {
                count++;
            } else if (this.innerText === '-' && count > 1) {
                count--;
            }
            span.innerText = count;
            // Nếu bạn có tính năng cập nhật giá tổng, hãy thêm code xử lý ở đây
        });
    });
});


// ==================
const swiper = new Swiper('.myHeroSlider', {
    // 1. Kích hoạt tính năng lặp lại
    loop: true,

    // 2. Cấu hình tự động chuyển banner
    autoplay: {
        delay: 4000,           // Thời gian chờ giữa các slide (tính bằng ms, 4000ms = 4 giây)
        disableOnInteraction: false, // Tiếp tục tự động chuyển ngay cả khi người dùng đã kéo slide thủ công
    },

    // 3. Thêm hiệu ứng chuyển động mượt mà (tùy chọn)
    effect: 'fade', // Chuyển cảnh kiểu mờ dần (nếu bạn muốn chuyên nghiệp hơn thay vì trượt ngang)
    fadeEffect: {
        crossFade: true
    },

    // 4. Các nút điều hướng (nếu có dùng)
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
// ==========================
// Thumblist
function changeImage(element) {
    // 1. Đổi ảnh lớn
    const mainImg = document.getElementById('main-product-img');
    const newSrc = element.querySelector('img').src;
    mainImg.src = newSrc;

    // 2. Cập nhật class active
    const currentActive = document.querySelector('.thumb-item.active');
    if (currentActive) {
        currentActive.classList.remove('active');
    }
    element.classList.add('active');
}