/**
 * DUDI SOFTWARE - Google Apps Script Form Handler & Email Notification
 * Gửi thông báo về: vtb22522005@gmail.com
 */

function doPost(e) {
  var TARGET_EMAIL = "vtb22522005@gmail.com";
  
  try {
    var data = {};
    if (e && e.postData && e.postData.contents) {
      try {
        data = JSON.parse(e.postData.contents);
      } catch (parseErr) {
        data = (e && e.parameter) ? e.parameter : {};
      }
    } else if (e && e.parameter) {
      data = e.parameter;
    }

    var timestamp = new Date().toLocaleString("vi-VN", { timeZone: "Asia/Ho_Chi_Minh" });
    var fullName = data.fullName || "Chưa cung cấp";
    var phone = data.phone || "Chưa cung cấp";
    var industry = data.industry || "Chưa cung cấp";
    var productCount = data.productCount || "Chưa cung cấp";
    var inventory = data.inventory || "Không";
    var packageInterest = data.packageInterest || "Chưa rõ";
    var paymentMethods = Array.isArray(data.paymentMethods) 
      ? data.paymentMethods.join(", ") 
      : (data.paymentMethods || "Chưa chọn");
    var description = data.description || "Không có ghi chú";
    var utmSource = (data.utm && data.utm.utm_source) || "Direct";
    var utmCampaign = (data.utm && data.utm.utm_campaign) || "None";

    // 1. TỰ ĐỘNG GHI VÀO GOOGLE SHEET (NẾU SCRIPT NẰM TRONG GOOGLE SHEET)
    try {
      var sheet = SpreadsheetApp.getActiveSpreadsheet();
      if (sheet) {
        var activeSheet = sheet.getActiveSheet();
        if (activeSheet.getLastRow() === 0) {
          activeSheet.appendRow([
            "Thời Gian",
            "Họ và Tên",
            "Số Điện Thoại",
            "Ngành Hàng",
            "Số Sản Phẩm",
            "Quản Lý Kho",
            "Gói Quan Tâm",
            "Phương Thức Thanh Toán",
            "Mô Tả Yêu Cầu",
            "UTM Source",
            "UTM Campaign"
          ]);
          activeSheet.getRange(1, 1, 1, 11).setFontWeight("bold").setBackground("#fee2e2");
        }
        activeSheet.appendRow([
          timestamp,
          fullName,
          phone,
          industry,
          productCount,
          inventory,
          packageInterest,
          paymentMethods,
          description,
          utmSource,
          utmCampaign
        ]);
      }
    } catch (sheetErr) {
      Logger.log("Sheet Logging Note: " + sheetErr.toString());
    }

    // 2. GỬI EMAIL THÔNG BÁO TỚI vtb22522005@gmail.com
    var emailSubject = "🚀 [DUDI LEADS MỚI] " + fullName + " - " + phone + " (" + packageInterest + ")";
    var phoneClean = phone.toString().replace(/[^0-9]/g, "");

    var htmlBody = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e2e8f0; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.05);">
        
        <div style="background: linear-gradient(135deg, #dc2626 0%, #b91c1c 100%); padding: 24px; text-align: center; color: #ffffff;">
          <h2 style="margin: 0; font-size: 20px; font-weight: 800; letter-spacing: 0.5px;">DUDI SOFTWARE - YÊU CẦU TƯ VẤN MỚI</h2>
          <p style="margin: 6px 0 0 0; font-size: 13px; opacity: 0.9;">Thời gian nhận: ${timestamp}</p>
        </div>

        <div style="padding: 24px;">
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #64748b; width: 40%;">Họ và tên:</td>
              <td style="padding: 10px 0; font-weight: 700; color: #0f172a; font-size: 15px;">${fullName}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Điện thoại / Zalo:</td>
              <td style="padding: 10px 0; font-weight: 700; color: #dc2626; font-size: 16px;">
                <a href="tel:${phone}" style="color: #dc2626; text-decoration: none;">${phone}</a>
                &nbsp;|&nbsp;
                <a href="https://zalo.me/${phoneClean}" target="_blank" style="color: #2563eb; text-decoration: none; font-size: 13px;">Nhắn Zalo ↗</a>
              </td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Ngành hàng:</td>
              <td style="padding: 10px 0; color: #0f172a;">${industry}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Số sản phẩm dự kiến:</td>
              <td style="padding: 10px 0; color: #0f172a;">${productCount}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Quản lý kho:</td>
              <td style="padding: 10px 0; color: #0f172a;">${inventory}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Gói dịch vụ quan tâm:</td>
              <td style="padding: 10px 0; font-weight: 700; color: #dc2626;">${packageInterest}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Phương thức thanh toán:</td>
              <td style="padding: 10px 0; color: #0f172a;">${paymentMethods}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f1f5f9;">
              <td style="padding: 10px 0; font-weight: bold; color: #64748b;">Nguồn truy cập (UTM):</td>
              <td style="padding: 10px 0; color: #64748b; font-size: 12px;">Source: ${utmSource} | Campaign: ${utmCampaign}</td>
            </tr>
          </table>

          <div style="margin-top: 18px; padding: 14px; background-color: #f8fafc; border-radius: 10px; border-left: 4px solid #dc2626;">
            <p style="margin: 0 0 6px 0; font-size: 13px; font-weight: bold; color: #475569; text-transform: uppercase;">Mô tả yêu cầu chi tiết:</p>
            <p style="margin: 0; font-size: 14px; color: #1e293b; line-height: 1.6; white-space: pre-wrap;">${description}</p>
          </div>

          <div style="margin-top: 24px; text-align: center;">
            <a href="tel:${phone}" style="display: inline-block; background-color: #dc2626; color: #ffffff; text-decoration: none; padding: 12px 28px; border-radius: 30px; font-weight: bold; font-size: 14px; box-shadow: 0 4px 10px rgba(220,38,38,0.3);">
              📞 Gọi Điện Ngay Cho Khách Hàng
            </a>
          </div>
        </div>

        <div style="background-color: #f8fafc; padding: 14px; text-align: center; border-top: 1px solid #e2e8f0; font-size: 12px; color: #94a3b8;">
          Hệ thống tiếp nhận thông tin tự động của <strong>DUDI SOFTWARE</strong>
        </div>
      </div>
    `;

    // Gửi bằng MailApp, nếu có lỗi thử GmailApp
    try {
      MailApp.sendEmail({
        to: TARGET_EMAIL,
        subject: emailSubject,
        htmlBody: htmlBody
      });
    } catch (mailErr) {
      GmailApp.sendEmail(TARGET_EMAIL, emailSubject, "", {
        htmlBody: htmlBody
      });
    }

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success", message: "Yêu cầu đã được gửi thành công!" }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    Logger.log("Error in doPost: " + error.toString());
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "running", message: "Google Apps Script API đang hoạt động bình thường!" }))
    .setMimeType(ContentService.MimeType.JSON);
}

// HÀM DÙNG ĐỂ BẤM "CHẠY (RUN)" TRỰC TIẾP TRONG GOOGLE APPS SCRIPT ĐỂ TEST & CẤP QUYỀN
function testSendEmail() {
  var testPayload = {
    postData: {
      contents: JSON.stringify({
        fullName: "DUDI Khách Hàng Thử Nghiệm",
        phone: "0909123456",
        industry: "Thời Trang & Mỹ Phẩm",
        productCount: "Dưới 50",
        inventory: "Có",
        packageInterest: "Tiêu Chuẩn",
        paymentMethods: ["COD", "Chuyển khoản"],
        description: "Đây là email kiểm tra hệ thống tiếp nhận tự động từ Google Apps Script.",
        utm: { utm_source: "manual_test", utm_campaign: "direct_run" }
      })
    }
  };
  
  var result = doPost(testPayload);
  Logger.log("Kết quả test: " + result.getContent());
}
