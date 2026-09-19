import React, { useState, useRef, useEffect } from 'react';
import { 
  X, 
  RotateCcw, 
  Send, 
  Sparkles, 
  CheckCheck, 
  MessageSquare, 
  ChevronRight,
  Phone
} from 'lucide-react';
import { ZALO_LINK, HOTLINE_NUMBER, HOTLINE_RAW } from '../utils/phoneHandler';

const QUICK_SUGGESTIONS = [
  { id: 'pricing', label: '💡 Báo giá các gói web bán hàng', query: 'Chi phí các gói thiết kế website bán hàng tại DUDI như thế nào?' },
  { id: 'standard', label: '⚡ Gói Tiêu Chuẩn 10tr có gì?', query: 'Gói Tiêu Chuẩn 10.000.000đ bao gồm những tính năng gì?' },
  { id: 'payment', label: '💳 Phương thức thanh toán & Đơn', query: 'Website hỗ trợ những hình thức thanh toán và quản lý đơn nào?' },
  { id: 'process', label: '🚀 Quy trình thiết kế 5 bước', query: 'Quy trình thiết kế và bàn giao website bán hàng tại DUDI như thế nào?' },
  { id: 'contact', label: '📞 Gặp chuyên viên tư vấn', query: 'Tôi muốn gặp chuyên viên tư vấn làm website bán hàng' }
];

const INITIAL_MESSAGES = [
  {
    id: 1,
    sender: 'bot',
    text: "Xin chào! 👋\nTôi là Trợ lý AI Chuyên gia Website Bán Hàng DUDI.\nTôi có thể hỗ trợ gì cho kế hoạch kinh doanh online và bán hàng của bạn hôm nay?",
    time: '10:30',
    type: 'text'
  }
];

export default function AIChatModal({ isOpen, onClose, onSelectPackage }) {
  const [messages, setMessages] = useState(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
      if (window.innerWidth > 768) {
        setTimeout(() => inputRef.current?.focus(), 300);
      }
    }
  }, [messages, isTyping, isOpen]);

  const handleReset = () => {
    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    setMessages([
      {
        id: Date.now(),
        sender: 'bot',
        text: "Xin chào! 👋\nTôi là Trợ lý AI Chuyên gia Website Bán Hàng DUDI.\nTôi có thể hỗ trợ gì cho kế hoạch kinh doanh online và bán hàng của bạn hôm nay?",
        time: timeStr,
        type: 'text'
      }
    ]);
  };

  const generateBotResponse = (userText) => {
    const query = userText.toLowerCase().trim();

    if (query.includes('giá') || query.includes('gói') || query.includes('chi phí') || query.includes('báo giá') || query.includes('bao nhiêu')) {
      return {
        text: `DUDI cung cấp 3 gói thiết kế website bán hàng chuyên nghiệp, rõ ràng và minh bạch:\n\n` +
          `• **Gói Cơ Bản (5.000.000đ)**: Tối đa 50 sản phẩm, 5 danh mục, giỏ hàng & thanh toán COD, phù hợp shop mới bắt đầu.\n` +
          `• **Gói Tiêu Chuẩn (10.000.000đ - Khuyên dùng ⭐)**: Tối đa 300 sản phẩm, 20 danh mục, COD & Chuyển khoản QR, mã giảm giá, quản lý tồn kho, chuẩn SEO & tracking GA4.\n` +
          `• **Gói Cao Cấp (Liên hệ riêng)**: Không giới hạn sản phẩm, cổng thanh toán online (VNPAY/MoMo), tích hợp CRM/ERP đa kênh.\n\n` +
          `👉 Bạn có thể xem chi tiết bảng giá hoặc để lại thông tin để nhận bản vẽ Demo miễn phí!`,
        actionType: 'pricing'
      };
    }

    if (query.includes('tiêu chuẩn') || query.includes('10tr') || query.includes('10 triệu') || query.includes('standard')) {
      return {
        text: `⚡ **Gói Tiêu Chuẩn (10.000.000đ)** là lựa chọn được lựa chọn nhiều nhất tại DUDI:\n\n` +
          `✅ **Quy mô:** Đăng tải đến 300 sản phẩm & 20 danh mục ngành hàng.\n` +
          `✅ **Thanh toán:** Tích hợp COD và chuyển khoản QR ngân hàng tự động.\n` +
          `✅ **Marketing:** Hỗ trợ tạo mã giảm giá voucher, quản lý tồn kho đơn giản.\n` +
          `✅ **Đo lường:** Tích hợp Google Analytics 4 (GA4) theo dõi luồng mua hàng.\n` +
          `✅ **Bàn giao:** 100% mã nguồn, hướng dẫn video và bảo hành kỹ thuật 12 tháng.`,
        actionType: 'standard'
      };
    }

    if (query.includes('thanh toán') || query.includes('cod') || query.includes('ngân hàng') || query.includes('chuyển khoản') || query.includes('qr') || query.includes('vnpay') || query.includes('momo')) {
      return {
        text: `💳 Website bán hàng DUDI hỗ trợ đa dạng phương thức thanh toán linh hoạt:\n\n` +
          `1. **COD (Giao hàng thu tiền):** Tự động xác nhận đơn qua Email & Trang cảm ơn.\n` +
          `2. **Chuyển khoản QR Code ngân hàng:** Tạo mã QR kèm số tiền và mã đơn tự động để khách quét thanh toán tức thì.\n` +
          `3. **Cổng thanh toán trực tuyến (Theo yêu cầu):** Tích hợp VNPAY, MoMo, ZaloPay hoặc thẻ Visa/Mastercard.\n\n` +
          `Hệ thống quản trị trực quan giúp bạn lọc đơn, đổi trạng thái (Mới -> Đang giao -> Hoàn tất) cực kỳ dễ dàng!`,
        actionType: 'payment'
      };
    }

    if (query.includes('quy trình') || query.includes('bước') || query.includes('thời gian') || query.includes('triển khai') || query.includes('bao lâu')) {
      return {
        text: `🚀 **Quy trình 5 bước thiết kế web bán hàng chuẩn hóa tại DUDI:**\n\n` +
          `1. **Tiếp nhận & Tư vấn:** Xác định ngành hàng & nhu cầu tính năng (1 ngày).\n` +
          `2. **Thiết kế Demo:** Lên bản vẽ giao diện UX/UI theo phong cách thương hiệu (2 - 3 ngày).\n` +
          `3. **Lập trình giỏ hàng & thanh toán:** Hoàn thiện luồng mua hàng & chuẩn SEO (4 - 7 ngày).\n` +
          `4. **Nhập liệu & Test lỗi:** Kiểm thử tương thích trên Mobile/Tablet/PC (1 - 2 ngày).\n` +
          `5. **Bàn giao & Bảo hành:** Bàn giao mã nguồn, video hướng dẫn và bảo hành 12 tháng.\n\n` +
          `⏱ **Thời gian hoàn thiện:** Chỉ từ **7 đến 14 ngày làm việc**!`,
        actionType: 'process'
      };
    }

    if (query.includes('liên hệ') || query.includes('tư vấn') || query.includes('số điện thoại') || query.includes('gặp') || query.includes('hotline') || query.includes('zalo') || query.includes('sđt')) {
      return {
        text: `Đội ngũ Chuyên gia DUDI luôn sẵn sàng lắng nghe và tư vấn miễn phí cho bạn:\n\n` +
          `📞 Hotline: **${HOTLINE_NUMBER}**\n` +
          `💬 Zalo Official: Nhấn nút bên dưới để trao đổi trực tiếp\n` +
          `🏢 Trụ sở: TP. Hồ Chí Minh\n\n` +
          `Chuyên viên kỹ thuật sẽ phản hồi ngay lập tức trong vòng 15 phút!`,
        actionType: 'contact'
      };
    }

    if (query.includes('bàn giao') || query.includes('mã nguồn') || query.includes('source code') || query.includes('bảo hành')) {
      return {
        text: `🛡 **Cam kết Bàn giao & Bảo hành tại DUDI:**\n\n` +
          `• **100% Sở hữu:** Bàn giao toàn bộ source code và quyền quản trị cao nhất.\n` +
          `• **Hướng dẫn quản trị:** Bàn giao tài liệu và video hướng dẫn chi tiết cách thêm sản phẩm, xử lý đơn hàng.\n` +
          `• **Bảo hành 12 tháng:** Hỗ trợ kỹ thuật, sao lưu dữ liệu và sửa lỗi phát sinh hoàn toàn miễn phí.`,
        actionType: 'guarantee'
      };
    }

    return {
      text: `Cảm ơn bạn đã quan tâm! DUDI có thể hỗ trợ bạn thiết kế web bán hàng, tối ưu tỷ lệ chuyển đổi, tích hợp thanh toán tự động hoặc xây dựng hệ thống e-commerce chuyên nghiệp.\n\n` +
        `Bạn muốn tìm hiểu thêm về **Báo giá**, **Tính năng Gói Tiêu Chuẩn** hay cần **Gặp chuyên viên tư vấn** trực tiếp?`,
      actionType: 'general'
    };
  };

  const handleSendMessage = (textToSend) => {
    const text = (textToSend || inputValue).trim();
    if (!text) return;

    const now = new Date();
    const timeStr = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;

    const newUserMsg = {
      id: Date.now(),
      sender: 'user',
      text: text,
      time: timeStr,
      type: 'text'
    };

    setMessages((prev) => [...prev, newUserMsg]);
    setInputValue('');
    setIsTyping(true);

    setTimeout(() => {
      const botReply = generateBotResponse(text);
      const botTime = new Date();
      const botTimeStr = `${String(botTime.getHours()).padStart(2, '0')}:${String(botTime.getMinutes()).padStart(2, '0')}`;

      const newBotMsg = {
        id: Date.now() + 1,
        sender: 'bot',
        text: botReply.text,
        time: botTimeStr,
        actionType: botReply.actionType
      };

      setMessages((prev) => [...prev, newBotMsg]);
      setIsTyping(false);
    }, 600);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const scrollToSection = (sectionId) => {
    const el = document.getElementById(sectionId);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="ai-chat-backdrop" onClick={onClose} aria-hidden="true" />

      <div 
        className="ai-chat-modal-wrapper"
        role="dialog"
        aria-modal="true"
        aria-label="Cửa sổ trò chuyện với Trợ lý AI DUDI"
      >
        <div className="ai-chat-window">
          {/* 1. Header */}
          <div className="ai-chat-header">
            <div className="ai-chat-header-info">
              <div className="ai-chat-avatar-wrapper">
                <img 
                  src="/robot-mascot.webp" 
                  alt="Trợ lý AI DUDI" 
                  className="ai-chat-avatar-img"
                />
                <span className="ai-chat-online-badge" />
              </div>

              <div className="ai-chat-title-group">
                <h3>
                  <span>Trợ lý AI DUDI</span>
                </h3>
                <p>
                  <span>Luôn sẵn sàng hỗ trợ bạn</span>
                  <span className="ai-chat-status-dot" />
                </p>
              </div>
            </div>

            <div className="ai-chat-header-actions">
              <button
                type="button"
                onClick={handleReset}
                title="Làm mới cuộc trò chuyện"
                className="ai-chat-icon-btn"
                aria-label="Làm mới chat"
              >
                <RotateCcw size={16} />
              </button>
              <button
                type="button"
                onClick={onClose}
                title="Đóng cửa sổ chat"
                className="ai-chat-icon-btn"
                aria-label="Đóng chat"
              >
                <X size={18} />
              </button>
            </div>
          </div>

          {/* 2. Messages List */}
          <div className="ai-chat-body">
            {messages.map((msg) => {
              const isBot = msg.sender === 'bot';

              return (
                <div
                  key={msg.id}
                  className={`ai-chat-message-row ${isBot ? 'bot' : 'user'}`}
                >
                  <div className="ai-chat-bubble-container">
                    <div className="ai-chat-bubble">
                      <div style={{ whiteSpace: 'pre-line' }}>
                        {msg.text.split('\n').map((line, i) => {
                          const parts = line.split(/(\*\*.*?\*\*)/g);
                          return (
                            <React.Fragment key={i}>
                              {parts.map((part, pIdx) => {
                                if (part.startsWith('**') && part.endsWith('**')) {
                                  return <strong key={pIdx}>{part.slice(2, -2)}</strong>;
                                }
                                return part;
                              })}
                              {i < msg.text.split('\n').length - 1 && <br />}
                            </React.Fragment>
                          );
                        })}
                      </div>

                      {/* Bot Action Buttons */}
                      {isBot && msg.actionType && (
                        <div className="ai-chat-actions">
                          {msg.actionType === 'pricing' && (
                            <button
                              type="button"
                              onClick={() => scrollToSection('pricing')}
                              className="ai-chat-action-btn btn-indigo"
                            >
                              <span>Xem Bảng giá</span>
                              <ChevronRight size={13} />
                            </button>
                          )}
                          {msg.actionType === 'standard' && (
                            <button
                              type="button"
                              onClick={() => {
                                if (onSelectPackage) onSelectPackage('Tiêu chuẩn');
                                scrollToSection('contact');
                              }}
                              className="ai-chat-action-btn btn-indigo"
                            >
                              <span>Chọn Gói Tiêu Chuẩn</span>
                              <ChevronRight size={13} />
                            </button>
                          )}
                          {msg.actionType === 'contact' && (
                            <>
                              <a
                                href={ZALO_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ai-chat-action-btn btn-blue"
                              >
                                <MessageSquare size={13} />
                                <span>Nhắn Zalo</span>
                              </a>
                              <button
                                type="button"
                                onClick={() => scrollToSection('contact')}
                                className="ai-chat-action-btn btn-gray"
                              >
                                <span>Điền Form</span>
                              </button>
                            </>
                          )}
                          {msg.actionType === 'process' && (
                            <button
                              type="button"
                              onClick={() => scrollToSection('process')}
                              className="ai-chat-action-btn btn-indigo"
                            >
                              <span>Sơ đồ 5 bước</span>
                              <ChevronRight size={13} />
                            </button>
                          )}
                        </div>
                      )}
                    </div>

                    <div className="ai-chat-meta">
                      <span>{msg.time}</span>
                      {!isBot && <CheckCheck size={13} className="ai-chat-seen-icon" />}
                    </div>
                  </div>
                </div>
              );
            })}

            {isTyping && (
              <div className="ai-chat-message-row bot">
                <div className="ai-chat-typing-bubble">
                  <div className="ai-typing-dot" />
                  <div className="ai-typing-dot" />
                  <div className="ai-typing-dot" />
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* 3. Quick Suggestions Chips */}
          <div className="ai-chat-suggestions">
            {QUICK_SUGGESTIONS.map((chip) => (
              <button
                key={chip.id}
                type="button"
                onClick={() => handleSendMessage(chip.query)}
                className="ai-chat-chip"
              >
                {chip.label}
              </button>
            ))}
          </div>

          {/* 4. Footer Input */}
          <div className="ai-chat-footer">
            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSendMessage();
              }}
              className="ai-chat-input-form"
            >
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Nhập tin nhắn của bạn..."
                className="ai-chat-input"
              />
              <button
                type="submit"
                disabled={!inputValue.trim()}
                aria-label="Gửi tin nhắn"
                className={`ai-chat-send-btn ${inputValue.trim() ? 'active' : ''}`}
              >
                <Send size={15} style={{ marginLeft: '1px' }} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <style>{`
        /* AI Chatbot Styles matching Light Mode reference */
        .ai-chat-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(15, 23, 42, 0.25);
          backdrop-filter: blur(1.5px);
          -webkit-backdrop-filter: blur(1.5px);
          z-index: 9990;
          animation: chatFadeIn 0.2s ease-out;
        }

        @keyframes chatFadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes chatSlideUp {
          from {
            opacity: 0;
            transform: translateY(16px) scale(0.96);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .ai-chat-modal-wrapper {
          position: fixed;
          bottom: 24px;
          right: 88px;
          z-index: 9999;
          animation: chatSlideUp 0.25s cubic-bezier(0.16, 1, 0.3, 1);
          pointer-events: auto;
        }

        .ai-chat-window {
          width: 385px;
          max-width: calc(100vw - 110px);
          height: 560px;
          max-height: calc(90vh - 30px);
          background: #ffffff;
          border-radius: 28px;
          box-shadow: 0 20px 45px -10px rgba(15, 23, 42, 0.22), 0 0 0 1px rgba(226, 232, 240, 0.9);
          display: flex;
          flex-direction: column;
          overflow: hidden;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
        }

        /* 1. Header */
        .ai-chat-header {
          padding: 14px 18px;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid #f1f5f9;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-shrink: 0;
        }

        .ai-chat-header-info {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .ai-chat-avatar-wrapper {
          position: relative;
          width: 44px;
          height: 44px;
          border-radius: 16px;
          background: linear-gradient(135deg, #4f46e5 0%, #6366f1 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
          flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(79, 70, 229, 0.25);
        }

        .ai-chat-avatar-img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }

        .ai-chat-online-badge {
          position: absolute;
          bottom: -1px;
          right: -1px;
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background-color: #10b981;
          border: 2px solid #ffffff;
        }

        .ai-chat-title-group h3 {
          font-size: 1.1rem;
          font-weight: 800;
          color: #0f172a;
          margin: 0;
          line-height: 1.25;
        }

        .ai-chat-title-group p {
          margin: 2px 0 0;
          font-size: 0.8rem;
          color: #64748b;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .ai-chat-status-dot {
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background-color: #22c55e;
          display: inline-block;
        }

        .ai-chat-header-actions {
          display: flex;
          align-items: center;
          gap: 4px;
        }

        .ai-chat-icon-btn {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: none;
          background: transparent;
          color: #64748b;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .ai-chat-icon-btn:hover {
          background: #f1f5f9;
          color: #0f172a;
        }

        /* 2. Chat Messages Body */
        .ai-chat-body {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 14px;
          background: #fafafa;
        }

        .ai-chat-message-row {
          display: flex;
          max-width: 88%;
          animation: chatMsgAppear 0.2s ease-out;
        }

        @keyframes chatMsgAppear {
          from {
            opacity: 0;
            transform: translateY(6px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .ai-chat-message-row.bot {
          align-self: flex-start;
        }

        .ai-chat-message-row.user {
          align-self: flex-end;
        }

        .ai-chat-bubble-container {
          display: flex;
          flex-direction: column;
        }

        .ai-chat-bubble {
          padding: 12px 16px;
          font-size: 0.885rem;
          line-height: 1.55;
          border-radius: 20px;
          word-break: break-word;
        }

        .ai-chat-message-row.bot .ai-chat-bubble {
          background: #ffffff;
          color: #1e293b;
          border-top-left-radius: 4px;
          box-shadow: 0 1px 4px rgba(0, 0, 0, 0.04);
          border: 1px solid #e2e8f0;
        }

        .ai-chat-message-row.user .ai-chat-bubble {
          background: linear-gradient(135deg, #5046e5 0%, #6366f1 100%);
          color: #ffffff;
          border-top-right-radius: 4px;
          box-shadow: 0 4px 12px rgba(80, 70, 229, 0.25);
        }

        .ai-chat-bubble strong {
          font-weight: 700;
        }

        .ai-chat-meta {
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 0.72rem;
          color: #94a3b8;
          margin-top: 4px;
        }

        .ai-chat-message-row.bot .ai-chat-meta {
          margin-left: 4px;
          justify-content: flex-start;
        }

        .ai-chat-message-row.user .ai-chat-meta {
          margin-right: 4px;
          justify-content: flex-end;
        }

        .ai-chat-seen-icon {
          color: #6366f1;
          font-size: 0.75rem;
          display: inline-flex;
        }

        /* Quick Action Buttons inside Bot Message */
        .ai-chat-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-top: 10px;
          padding-top: 8px;
          border-top: 1px solid #f1f5f9;
        }

        .ai-chat-action-btn {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 5px 10px;
          border-radius: 8px;
          font-size: 0.75rem;
          font-weight: 600;
          cursor: pointer;
          border: none;
          text-decoration: none;
          transition: all 0.15s ease;
        }

        .ai-chat-action-btn.btn-indigo {
          background: #eef2ff;
          color: #4f46e5;
        }

        .ai-chat-action-btn.btn-indigo:hover {
          background: #e0e7ff;
        }

        .ai-chat-action-btn.btn-blue {
          background: #0068ff;
          color: #ffffff;
        }

        .ai-chat-action-btn.btn-blue:hover {
          background: #0052cc;
        }

        .ai-chat-action-btn.btn-gray {
          background: #f1f5f9;
          color: #334155;
        }

        .ai-chat-action-btn.btn-gray:hover {
          background: #e2e8f0;
        }

        /* Typing Indicator */
        .ai-chat-typing-bubble {
          display: flex;
          align-items: center;
          gap: 4px;
          padding: 10px 14px;
          background: #ffffff;
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          border-top-left-radius: 4px;
          width: fit-content;
        }

        .ai-typing-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background-color: #6366f1;
          animation: typingBounce 1.2s infinite ease-in-out;
        }

        .ai-typing-dot:nth-child(1) { animation-delay: -0.3s; }
        .ai-typing-dot:nth-child(2) { animation-delay: -0.15s; }
        .ai-typing-dot:nth-child(3) { animation-delay: 0s; }

        @keyframes typingBounce {
          0%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-5px); }
        }

        /* 3. Quick Suggestion Chips */
        .ai-chat-suggestions {
          padding: 8px 12px;
          background: #ffffff;
          border-top: 1px solid #f1f5f9;
          overflow-x: auto;
          white-space: nowrap;
          display: flex;
          gap: 6px;
          scrollbar-width: none;
          flex-shrink: 0;
        }

        .ai-chat-suggestions::-webkit-scrollbar {
          display: none;
        }

        .ai-chat-chip {
          padding: 6px 14px;
          border-radius: 9999px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          color: #334155;
          font-size: 0.775rem;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.15s ease;
          flex-shrink: 0;
        }

        .ai-chat-chip:hover {
          background: #eff6ff;
          border-color: #93c5fd;
          color: #2563eb;
        }

        /* 4. Footer Input */
        .ai-chat-footer {
          padding: 12px 14px;
          background: #ffffff;
          border-top: 1px solid #f1f5f9;
          flex-shrink: 0;
        }

        .ai-chat-input-form {
          display: flex;
          align-items: center;
          background: #ffffff;
          border-radius: 9999px;
          padding: 4px 6px 4px 16px;
          border: 1.5px solid #6366f1;
          box-shadow: 0 1px 4px rgba(99, 102, 241, 0.1);
          transition: all 0.2s ease;
        }

        .ai-chat-input-form:focus-within {
          border-color: #4f46e5;
          box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.2);
        }

        .ai-chat-input {
          flex: 1;
          border: none;
          background: transparent;
          font-size: 0.885rem;
          color: #0f172a;
          outline: none;
          padding: 6px 0;
        }

        .ai-chat-input::placeholder {
          color: #94a3b8;
        }

        .ai-chat-send-btn {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          border: none;
          background: #e2e8f0;
          color: #94a3b8;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: not-allowed;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }

        .ai-chat-send-btn.active {
          background: linear-gradient(135deg, #5046e5 0%, #6366f1 100%);
          color: #ffffff;
          cursor: pointer;
          box-shadow: 0 2px 8px rgba(79, 70, 229, 0.35);
        }

        .ai-chat-send-btn.active:hover {
          transform: scale(1.05);
        }

        /* Responsive adjustment for Mobile */
        @media (max-width: 768px) {
          .ai-chat-modal-wrapper {
            bottom: 0;
            right: 0;
            left: 0;
            top: 0;
            display: flex;
            align-items: flex-end;
            padding: 0;
          }

          .ai-chat-window {
            width: 100%;
            max-width: 100%;
            height: 82vh;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
          }
        }
      `}</style>
    </>
  );
}