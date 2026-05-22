# Hướng dẫn Deploy Match & Wake Admin lên Vercel

Tài liệu này hướng dẫn cách chạy thử nghiệm ở môi trường local, build sản phẩm và triển khai (deploy) ứng dụng **match-wake-admin** (bao gồm Landing Page và Admin Dashboard) lên nền tảng đám mây **Vercel**.

---

## 1. Cách chạy dưới Local (Development)

Để cài đặt các thư viện phụ thuộc và khởi chạy server phát triển ở môi trường local, thực hiện các lệnh sau tại thư mục `match-wake-admin`:

```bash
# Di chuyển vào thư mục admin (nếu đang ở thư mục gốc của project)
cd match-wake-admin

# Cài đặt thư viện dependencies
npm install

# Khởi chạy dev server
npm run dev
```

Sau khi chạy lệnh trên, truy cập ứng dụng thông qua địa chỉ:
* Landing Page: `http://localhost:5173/` (hoặc cổng khác được hiển thị trên console)
* Admin Dashboard: `http://localhost:5173/admin`

---

## 2. Cách Build dự án cục bộ

Để kiểm tra xem dự án có lỗi biên dịch (compile error) hay không trước khi đẩy lên production:

```bash
# Build dự án
npm run build
```

Kết quả sau khi build thành công sẽ tạo ra thư mục tĩnh tên là `dist/` chứa toàn bộ tài nguyên HTML, CSS và JS được tối ưu hóa.

---

## 3. Cách Deploy bằng giao diện Vercel UI (Vercel Dashboard)

Thực hiện các bước sau để deploy dự án lên Vercel thông qua giao diện Web:

1. **Đẩy mã nguồn lên GitHub**:
   * Đảm bảo dự án đã được commit và push lên kho lưu trữ GitHub của bạn.

2. **Truy cập Vercel**:
   * Truy cập trang chủ [Vercel](https://vercel.com/) và đăng nhập bằng tài khoản GitHub.

3. **Import Repository**:
   * Tại trang Dashboard của Vercel, nhấn **"Add New"** -> **"Project"**.
   * Tìm kiếm repository chứa dự án Match & Wake của bạn và nhấn **"Import"**.

4. **Cấu hình Project Settings**:
   * **Root Directory**: Nhấn nút *Edit* và chọn thư mục `match-wake-admin` (Không chọn thư mục gốc của toàn bộ repo).
   * **Framework Preset**: Chọn **Vite**.
   * **Build and Output Settings** (Mở rộng phần này ra):
     * *Build Command*: `npm run build` (hoặc để mặc định/bật override)
     * *Output Directory*: `dist` (hoặc để mặc định/bật override)
     * *Install Command*: `npm install` (hoặc để mặc định)

5. **Deploy**:
   * Nhấn nút **"Deploy"** và đợi khoảng 1 - 2 phút để Vercel tải mã nguồn, build dự án và xuất bản.

---

## 4. Cách kiểm tra sau khi Deploy thành công

Sau khi Vercel deploy hoàn tất, bạn sẽ nhận được một tên miền dạng `https://ten-du-an.vercel.app/`. Hãy kiểm tra các đường dẫn sau:

* **Landing Page**:
  `https://ten-du-an.vercel.app/`
* **Admin Dashboard**:
  `https://ten-du-an.vercel.app/admin`

---

## 5. Hướng dẫn khắc phục lỗi 404 khi truy cập trực tiếp `/admin` hoặc reload trang

### Vấn đề:
Vì đây là ứng dụng Single Page Application (SPA) sử dụng React Router client-side routing, khi người dùng truy cập trực tiếp link `https://ten-du-an.vercel.app/admin` hoặc tải lại trang (reload/F5) khi đang ở `/admin`, Vercel sẽ cố tìm kiếm tệp tin `/admin/index.html` hoặc `/admin` vật lý trên server và trả về lỗi **404 Not Found**.

### Cách khắc phục:
1. Đảm bảo file cấu hình [vercel.json](file:///d:/stitch_match_wake_social_alarm/match-wake-admin/vercel.json) tồn tại ở thư mục gốc của dự án `match-wake-admin`.
2. Nội dung của file `vercel.json` phải cấu hình rewrite toàn bộ các request không phải file tĩnh về `index.html`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

Khi cấu hình này được áp dụng, Vercel sẽ luôn phục vụ tệp `index.html` của ứng dụng và giao quyền định tuyến (routing) lại cho React Router ở client xử lý, giúp đường dẫn `/admin` và reload hoạt động bình thường mà không bị lỗi 404.
