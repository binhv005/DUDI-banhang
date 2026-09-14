Hãy xây dựng hoàn chỉnh một landing page website bán hàng cho **DUDI SOFTWARE** bằng **React**.

## QUY TẮC QUAN TRỌNG NHẤT

* Phải sử dụng toàn bộ nội dung được cung cấp bên dưới.
* **KHÔNG được tự ý thay đổi nội dung, số liệu, giá tiền, phạm vi dịch vụ, tên công ty, thông tin pháp lý hoặc câu chữ CTA.**
* Không được tự thêm các cam kết không có trong nội dung.
* Không được sử dụng từ **“không giới hạn”** cho sản phẩm, danh mục hoặc biến thể.
* Không cam kết doanh thu hoặc SEO nếu chưa có hợp đồng riêng.
* Không được thay đổi tên pháp nhân.
* Phải sử dụng đúng tên:

**Công ty TNHH Giải Pháp Phần Mềm DUDI**

Không sử dụng tên:

**Công ty TNHH Công Nghệ Phần Mềm DUDI**

* Không tự thay đổi mức giá:

  * Cơ bản: **5.000.000 đồng**
  * Tiêu chuẩn: **10.000.000 đồng**
  * Cao cấp: **Liên hệ / báo giá theo phạm vi**

---

# 1. CÔNG NGHỆ

Sử dụng:

* React
* Component-based architecture
* CSS hiện đại hoặc Tailwind CSS
* Responsive hoàn chỉnh
* Smooth scrolling
* Animation / transition hiện đại nhưng nhẹ
* Semantic HTML
* Accessibility cơ bản
* Không sử dụng framework backend nếu chưa cần thiết

Code cần rõ ràng, dễ bảo trì và chia component hợp lý.

Có thể tổ chức component như sau:

* Header
* Hero
* TargetAudience
* Problems
* Deliverables
* Pricing
* Process
* CaseStudies
* Limitations
* FAQ
* ContactForm
* FinalCTA
* Footer
* FloatingActions
* ScrollToTop

---

# 2. PHONG CÁCH THIẾT KẾ

## Màu sắc

* Màu chủ đạo: **đỏ theo màu logo**
* Sử dụng màu đỏ làm màu thương hiệu chính cho:

  * CTA
  * Button
  * Highlight
  * Icon quan trọng
  * Pricing package nổi bật
  * Các trạng thái tương tác

## Logo

Sử dụng file:

**logo.webp**

Không thay thế bằng logo khác.

## Giao diện

* Giao diện sáng
* Hiện đại
* Chuyên nghiệp
* Phù hợp với công ty phần mềm / website
* Nhiều khoảng trắng hợp lý
* Typography rõ ràng
* Không quá nhiều hiệu ứng gây rối
* CTA nổi bật

---

# 3. QUY TẮC BỐ CỤC SECTION

Mỗi section phải:

* Có chiều cao phù hợp với màn hình.
* Ưu tiên sử dụng `min-height: 100vh` hoặc bố cục tương đương.
* **Không để nội dung bị vượt quá chiều cao màn hình một cách mất kiểm soát.**
* Không làm người dùng phải cuộn quá dài trong một section.
* Với nội dung dài như bảng giá, FAQ hoặc form:

  * Tối ưu spacing và layout để dễ đọc.
  * Có thể cho phép nội dung cuộn tự nhiên khi cần thiết.
  * Không ép nội dung bị cắt mất.

Các section phải có:

* Padding responsive.
* Khoảng cách nhất quán.
* Căn chỉnh tốt trên desktop, tablet và mobile.

---

# 4. BACKGROUND XEN KẼ GIỮA CÁC SECTION

Tạo background xen kẽ giữa các section.

Ví dụ:

* Section 1: trắng
* Section 2: đỏ rất nhạt
* Section 3: trắng
* Section 4: xám/đỏ rất nhạt
* Section tiếp theo tiếp tục xen kẽ

Mục tiêu:

* Phân tách rõ các khu vực.
* Không làm giao diện nặng.
* Giữ phong cách sáng.
* Không sử dụng background quá tối.

---

# 5. HEADER — S01

Mục tiêu:

Nhận diện và liên hệ.

Bao gồm:

* Logo `logo.webp`
* Menu điều hướng bằng anchor link đến các section.
* Hotline
* Zalo
* CTA chính

Menu cần scroll đến đúng section.

Header:

* Có thể sticky khi cuộn.
* Background sáng.
* Có shadow nhẹ khi scroll.
* Responsive:

  * Desktop hiển thị menu đầy đủ.
  * Tablet/mobile sử dụng menu phù hợp.

CTA phải dẫn tới form tư vấn.

---

# 6. HERO — S02

Hero phải nằm trong màn hình đầu tiên.

Nội dung phải thể hiện:

* Loại dịch vụ.
* Website bán hàng.
* Giá từ **5.000.000 đồng**.
* Khả năng nhận đơn.

CTA Hero phải sử dụng đúng câu:

**Nhận tư vấn website bán hàng**

CTA dẫn đến form tư vấn.

Hero bao gồm:

* Một H1 duy nhất.
* Mô tả.
* Giá.
* CTA.
* Hình minh họa phù hợp.

Không được tự ý thay đổi nội dung kinh doanh.

---

# 7. ĐỐI TƯỢNG PHÙ HỢP — S03

Mục tiêu:

Giúp khách tự nhận diện.

Hiển thị các nhóm khách hàng phù hợp:

* Mới bắt đầu bán → gói Cơ bản.
* Đã bán ổn định → gói Tiêu chuẩn.
* Cần mở rộng vận hành → gói Cao cấp.

Mỗi nhóm:

* Có mô tả nhu cầu.
* Có CTA hoặc liên kết đến gói phù hợp.

---

# 8. VẤN ĐỀ — S04

Mục tiêu:

Tạo nhu cầu.

Nêu các tình trạng thực tế khách hàng có thể đang gặp.

Yêu cầu:

* Không phóng đại.
* Không gây sợ hãi.
* Không sử dụng các tuyên bố cực đoan.

Thiết kế dạng:

* Card
* Icon
* Nội dung ngắn gọn
* Responsive

---

# 9. ĐẦU RA / KHÁCH HÀNG NHẬN ĐƯỢC — S05

Nêu rõ khách hàng nhận được gì.

Bao gồm:

* Hạng mục.
* Giới hạn.
* Dữ liệu khách cần cung cấp.

Nội dung phải khớp với bảng phạm vi các gói.

Không tự thêm dịch vụ ngoài nội dung.

---

# 10. BẢNG GIÁ — S06

Tạo section pricing nổi bật với 3 gói:

## GÓI CƠ BẢN

Phù hợp:

**Mới bắt đầu bán**

Sản phẩm:

**Tối đa 50**

Danh mục:

**Tối đa 5**

Giao diện:

**Mẫu có sẵn**

Giỏ hàng và đặt hàng:

**Có**

Thanh toán:

**COD**

Quản lý đơn:

**Trạng thái cơ bản**

Tồn kho:

**Không**

Khách hàng:

**Lưu thông tin đơn**

Khuyến mãi:

**Không**

Biến thể:

**Không hoặc một thuộc tính**

Báo cáo:

**Không**

Tracking:

**Sự kiện đơn cơ bản**

Giá:

**5.000.000 đồng**

CTA:

**Chọn gói Cơ bản từ 5.000.000 đồng**

---

## GÓI TIÊU CHUẨN

Phù hợp:

**Đã bán ổn định**

Sản phẩm:

**Tối đa 300**

Danh mục:

**Tối đa 20**

Giao diện:

**Bố cục theo ngành**

Giỏ hàng và đặt hàng:

**Có**

Thanh toán:

**COD và chuyển khoản**

Quản lý đơn:

**Quy trình trạng thái đã chốt**

Tồn kho:

**Tồn kho đơn giản**

Khách hàng:

**Danh sách khách hàng**

Khuyến mãi:

**Mã giảm giá đơn giản**

Biến thể:

**Tối đa hai thuộc tính**

Báo cáo:

**Đơn hàng và doanh thu cơ bản**

Tracking:

**GA4 ecommerce cơ bản**

Giá:

**10.000.000 đồng**

CTA:

**Chọn gói Tiêu chuẩn từ 10.000.000 đồng**

---

## GÓI CAO CẤP

Phù hợp:

**Cần mở rộng vận hành**

Sản phẩm:

**Chốt theo dữ liệu và hạ tầng**

Danh mục:

**Tối đa 50 hoặc báo giá**

Giao diện:

**Thiết kế theo hành vi mua**

Giỏ hàng và đặt hàng:

**Có**

Thanh toán:

**COD, chuyển khoản và 1 cổng online**

Quản lý đơn:

**Workflow và phân quyền đã chốt**

Tồn kho:

**Tồn kho và cảnh báo cơ bản**

Khách hàng:

**Lịch sử mua và phân nhóm cơ bản**

Khuyến mãi:

**Mã giảm giá và điều kiện đã chốt**

Biến thể:

**Theo cấu trúc dữ liệu đã chốt**

Báo cáo:

**Báo cáo theo thời gian và sản phẩm**

Tracking:

**GA4 ecommerce và funnel đã chốt**

Giá:

**Liên hệ**

CTA:

**Gửi quy mô cửa hàng để nhận báo giá**

---

Thiết kế bảng giá:

* Desktop: 3 cột.
* Tablet: responsive grid.
* Mobile: card xếp dọc.
* Có một gói được highlight trực quan hợp lý.
* Không làm thay đổi nội dung của các gói.

---

# 11. QUY TRÌNH — S07

Hiển thị quy trình:

1. Tiếp nhận
2. Xác nhận
3. Triển khai
4. Test
5. Bàn giao

Phải thể hiện:

* Đầu vào.
* Đầu ra.
* Trạng thái từng bước.

Thiết kế timeline hoặc stepper hiện đại.

---

# 12. CASE / MẪU — S08

Tạo section:

* Case hoặc mẫu.
* Có ảnh minh họa.
* Có phạm vi.
* Có trạng thái.
* Có kết quả đo được nếu có dữ liệu được phép.

**Chỉ sử dụng dữ liệu được phép.**

Không tự tạo số liệu hoặc case study giả.

---

# 13. GIỚI HẠN — S09

Hiển thị rõ:

## Ngoài phạm vi

* Phí cổng thanh toán.
* Vận chuyển.
* Hóa đơn điện tử.
* SMS.
* Hosting.
* Domain.
* License.
* Chụp ảnh.
* Nhập dữ liệu vượt hạn mức.
* ERP.
* CRM.
* POS.
* Sàn đa nhà bán.
* Ứng dụng di động.

Thiết kế rõ ràng để khách hiểu trước khi gửi form.

---

# 14. FAQ — S10

Hiển thị FAQ accordion.

Sử dụng đúng nội dung:

### Giá đã gồm cổng thanh toán chưa?

Chưa gồm phí dịch vụ và phí giao dịch của nhà cung cấp.

### Ai nhập sản phẩm?

Hai bên phải chốt số lượng nhập ban đầu. Phần vượt hạn mức được báo giá riêng.

### Có đồng bộ sàn không?

Không mặc định. Mỗi sàn hoặc hệ thống đồng bộ cần khảo sát API.

### Có quản lý nhiều kho không?

Không nằm trong gói Cơ bản hoặc Tiêu chuẩn mặc định.

### Có cam kết doanh thu không?

Không. Website là một phần của quy trình bán hàng và marketing.

FAQ phải có sẵn trong HTML.

---

# 15. FORM NHẬN YÊU CẦU — S11

Tạo form đầy đủ.

## Các trường

### Họ và tên

* Type: text
* Bắt buộc.
* 2 đến 80 ký tự.

### Điện thoại hoặc Zalo

* Type: tel
* Bắt buộc.
* 9 đến 12 chữ số.

### Ngành hàng

* Type: text
* Bắt buộc.
* 2 đến 120 ký tự.

### Số sản phẩm

Select:

* Dưới 50
* 51 đến 300
* Trên 300

### Thanh toán

Checkbox:

* COD
* Chuyển khoản
* Online

### Tồn kho

Select:

* Không
* Một kho
* Nhiều kho

Không bắt buộc.

### Gói quan tâm

Select:

* Cơ bản
* Tiêu chuẩn
* Cao cấp
* Chưa rõ

### Mô tả

Textarea:

* Bắt buộc.
* 10 đến 1000 ký tự.

---

## Yêu cầu hành vi Form

* Không thu tài khoản ngân hàng.
* Không thu mật khẩu.
* Lưu nguồn UTM.
* Lưu gói quan tâm.
* Nếu chọn thanh toán online:

  * Hiển thị lưu ý cần hồ sơ hợp lệ.
* Chống gửi trùng.
* Giới hạn tần suất gửi.
* Validation rõ ràng.
* Error state.
* Success state.

Thông báo thành công phải sử dụng đúng nội dung:

**DUDI đã nhận thông tin cửa hàng và sẽ liên hệ qua số điện thoại hoặc Zalo.**

---

# 16. CTA CUỐI — S12

Có:

* Lợi ích.
* CTA chính.
* Kênh liên hệ.

Chỉ tập trung vào một hành động chính.

CTA dẫn đến form hoặc hành động liên hệ phù hợp.

---

# 17. FOOTER — S13

Hiển thị đúng thông tin:

Tên pháp nhân:

**Công ty TNHH Giải Pháp Phần Mềm DUDI**

Mã số thuế:

**0319641544**

Hotline:

**0909 163 821**

Email:

**[contact@dudisoftware.com](mailto:contact@dudisoftware.com)**

Địa chỉ:

**49/2 Đường 14, Phường Thủ Đức, Thành phố Hồ Chí Minh**

Có thêm khu vực:

* Chính sách.
* Thông tin pháp lý.

---

# 18. FLOATING ACTION BUTTONS

Khi người dùng cuộn xuống qua Hero:

Hiển thị cụm nút floating ở góc phải màn hình.

Thứ tự từ trên xuống:

1. Call
2. Zalo
3. Nút lên đầu trang

Yêu cầu:

* Nút Call.
* Nút Zalo.
* Nút Scroll To Top nằm **bên dưới nút Call và Zalo**.
* Không hiển thị cụm này khi người dùng đang ở phần Hero nếu chưa cần thiết.
* Khi cuộn xuống thì xuất hiện bằng animation nhẹ.

---

# 19. HÀNH VI SỐ ĐIỆN THOẠI

Số điện thoại:

**0909 163 821**

## Desktop

Khi click vào số điện thoại:

* Không chuyển sang cuộc gọi.
* Sao chép số điện thoại vào clipboard.
* Hiển thị thông báo:

**Đã sao chép số điện thoại**

## Mobile

Khi click vào số điện thoại:

* Điều hướng sang cuộc gọi bằng `tel:`.
* Không sử dụng hành vi copy trên mobile.

Cần detect hợp lý giữa desktop và thiết bị cảm ứng/mobile.

---

# 20. HÀNH VI KHI RELOAD

Khi reload trang:

* Trang phải tự động quay về đầu trang.
* Không giữ vị trí scroll trước đó.

Thực hiện bằng logic React phù hợp.

---

# 21. SCROLL VÀ CHUYỂN SECTION

Khi click menu:

* Smooth scroll đến section tương ứng.

Khi người dùng cuộn:

* Có hiệu ứng chuyển động nhẹ giữa các section.
* Có thể sử dụng:

  * Fade in.
  * Slide up nhẹ.
  * Reveal animation.

Không sử dụng animation quá nặng.

Mỗi section nên có transition/reveal khi đi vào viewport.

Có thể thêm hiệu ứng chuyển section mượt mà để trải nghiệm hiện đại.

---

# 22. RESPONSIVE

Phải responsive đầy đủ cho:

* Desktop.
* Tablet.
* Mobile.

Bắt buộc kiểm tra:

* 360px
* 390px
* 768px
* 1024px
* 1440px

Yêu cầu:

* Không tràn ngang.
* Text không bị cắt.
* Button dễ bấm trên điện thoại.
* Header phù hợp từng kích thước.
* Pricing table responsive.
* Form responsive.
* FAQ responsive.
* Floating button không che nội dung quan trọng.

---

# 23. ACCESSIBILITY

Phải có:

* Label cho form.
* Focus state nhìn thấy được.
* Tab navigation đúng.
* Alt text cho hình ảnh.
* Độ tương phản đạt mức dễ đọc.
* Semantic HTML.

---

# 24. YÊU CẦU KỸ THUẬT

* Không để secret ở frontend.
* Không để stack trace hiển thị.
* Không có lỗi console.
* Không có link rỗng.
* Không có lỗi 404.
* Validation form đầy đủ.
* Không gửi dữ liệu cá nhân vào tracking.
* Không lưu số thẻ hoặc CVV.
* Nếu có thanh toán online phải dùng SDK hoặc trang chính thức của nhà cung cấp.

---

# 25. THUẬT NGỮ CẦN GIỮ ĐÚNG

## Một sản phẩm

Một mã sản phẩm chính. Biến thể, nhiều bảng giá hoặc cấu hình phức tạp có thể làm tăng phạm vi.

## Một cổng thanh toán

Một nhà cung cấp có tài liệu và tài khoản hợp lệ. Phí giao dịch hoặc duy trì do khách thanh toán.

## Tồn kho đơn giản

Nhập, trừ và xem số lượng theo sản phẩm hoặc biến thể. Không gồm nhiều kho, lô, hạn dùng hoặc điều chuyển.

## Workflow đơn hàng

Tập trạng thái và quyền chuyển trạng thái được chốt trước khi lập trình.

## GA4 ecommerce

Các sự kiện xem sản phẩm, thêm giỏ, bắt đầu thanh toán và mua hàng khi nền tảng cho phép.

---

# 26. CÁC QUY TẮC NỘI DUNG BẮT BUỘC

Phải giữ đúng nguyên tắc:

* Không dùng từ “không giới hạn” cho sản phẩm, danh mục hoặc biến thể.
* Không cam kết doanh thu.
* Không cam kết SEO nếu chưa có hợp đồng riêng.
* Không lưu thông tin thẻ ngân hàng trên máy chủ DUDI.
* Số lượng sản phẩm nhập ban đầu phải được chốt trong báo giá.
* Giá và phạm vi phải đúng nội dung.
* Không tự ý thêm số liệu.
* Không tạo case study giả.
* Không tự ý thay đổi thông tin pháp lý.

---

# 27. KẾT QUẢ CUỐI CÙNG CẦN TẠO

Hãy tạo một landing page React hoàn chỉnh với:

* Giao diện sáng.
* Màu đỏ chủ đạo theo logo.
* Sử dụng `logo.webp`.
* 13 khu vực từ S01 đến S13.
* Background xen kẽ giữa các section.
* Responsive desktop/tablet/mobile.
* Smooth scroll.
* Animation giữa các section.
* Header navigation.
* Hero.
* Pricing.
* FAQ accordion.
* Form validation.
* Floating Call + Zalo + Scroll To Top.
* Reload luôn quay về đầu trang.
* Click số điện thoại desktop → copy.
* Click số điện thoại mobile → gọi điện.
* Không tràn ngang.
* Code React sạch và có cấu trúc component rõ ràng.

## QUAN TRỌNG

Không được tự ý rút gọn hoặc thay đổi nội dung kinh doanh, giá, phạm vi, FAQ, CTA, thông tin pháp lý và các giới hạn đã cung cấp.

Nếu có phần chưa có dữ liệu cụ thể như hình ảnh case study, không được tự bịa số liệu hoặc kết quả. Chỉ tạo layout/placeholder phù hợp và giữ trạng thái rõ ràng.

Ưu tiên chất lượng UI/UX hiện đại, chuyên nghiệp, dễ đọc và tối ưu chuyển đổi khách hàng.
