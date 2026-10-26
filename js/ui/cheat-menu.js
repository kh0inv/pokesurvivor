/* ============ cheat-menu.js — Menu cheat / debug bên trái màn hình ============ */
(() => {
  window.CHEAT_GOD_MODE = false;
  window.CHEAT_BONUS_ATK = 0;
  window.CHEAT_DMG_MUL = 1;
  window.CHEAT_SPEED_MUL = 1;

  // Tải trạng thái đã lưu nếu có
  try {
    const saved = JSON.parse(localStorage.getItem('ps_cheats') || '{}');
    if (saved.godMode) window.CHEAT_GOD_MODE = true;
    if (typeof saved.bonusAtk === 'number') window.CHEAT_BONUS_ATK = saved.bonusAtk;
    if (typeof saved.speedMul === 'number') window.CHEAT_SPEED_MUL = saved.speedMul;
  } catch (e) {}

  function saveCheats() {
    try {
      localStorage.setItem('ps_cheats', JSON.stringify({
        godMode: window.CHEAT_GOD_MODE,
        bonusAtk: window.CHEAT_BONUS_ATK,
        speedMul: window.CHEAT_SPEED_MUL
      }));
    } catch (e) {}
  }

  function initCheatMenu() {
    if (document.getElementById('cheat-menu-wrapper')) return;

    // CSS
    const style = document.createElement('style');
    style.id = 'cheat-menu-style';
    style.textContent = `
      #cheat-menu-wrapper {
        position: fixed;
        left: 10px;
        top: 50%;
        transform: translateY(-50%);
        z-index: 99999;
        font-family: 'Pixelify', 'Segoe UI', Tahoma, sans-serif;
        user-select: none;
      }
      #cheat-toggle-btn {
        background: rgba(15, 23, 42, 0.9);
        color: #facc15;
        border: 2px solid #eab308;
        border-radius: 8px;
        padding: 8px 12px;
        font-size: 13px;
        font-weight: bold;
        cursor: pointer;
        box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
        display: flex;
        align-items: center;
        gap: 6px;
        transition: all 0.2s;
      }
      #cheat-toggle-btn:hover {
        background: #eab308;
        color: #000;
        transform: scale(1.05);
      }
      #cheat-panel {
        display: none;
        background: rgba(13, 18, 36, 0.96);
        border: 2px solid #f59e0b;
        border-radius: 12px;
        width: 240px;
        padding: 14px;
        color: #fff;
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.8), 0 0 15px rgba(245, 158, 11, 0.2);
      }
      #cheat-panel.active {
        display: block;
        animation: cheatSlideIn 0.2s ease-out;
      }
      @keyframes cheatSlideIn {
        from { opacity: 0; transform: translateX(-15px); }
        to { opacity: 1; transform: translateX(0); }
      }
      .cheat-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid rgba(255, 255, 255, 0.15);
        padding-bottom: 8px;
        margin-bottom: 12px;
      }
      .cheat-title {
        font-size: 15px;
        font-weight: 800;
        color: #fbbf24;
        display: flex;
        align-items: center;
        gap: 6px;
      }
      .cheat-close {
        background: none;
        border: none;
        color: #94a3b8;
        font-size: 16px;
        cursor: pointer;
        padding: 2px 6px;
      }
      .cheat-close:hover { color: #f87171; }
      .cheat-row {
        margin-bottom: 12px;
        display: flex;
        flex-direction: column;
        gap: 6px;
      }
      .cheat-row-title {
        font-size: 12px;
        color: #cbd5e1;
        font-weight: 600;
      }
      .cheat-btn {
        background: #1e293b;
        color: #f1f5f9;
        border: 1px solid #475569;
        border-radius: 6px;
        padding: 6px 10px;
        font-size: 12px;
        font-weight: bold;
        cursor: pointer;
        transition: all 0.15s;
        text-align: center;
      }
      .cheat-btn:hover {
        background: #334155;
        border-color: #94a3b8;
      }
      .cheat-btn.active {
        background: #16a34a;
        border-color: #4ade80;
        color: #fff;
        box-shadow: 0 0 8px rgba(74, 222, 128, 0.4);
      }
      .cheat-btn-group {
        display: flex;
        gap: 4px;
      }
      .cheat-btn-group .cheat-btn {
        flex: 1;
        padding: 5px 4px;
        font-size: 11px;
      }
      .cheat-dame-val {
        color: #38bdf8;
        font-weight: bold;
      }
      .cheat-quick-grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 5px;
      }
    `;
    document.head.appendChild(style);

    // HTML wrapper
    const wrapper = document.createElement('div');
    wrapper.id = 'cheat-menu-wrapper';
    wrapper.innerHTML = `
      <button id="cheat-toggle-btn" title="Bấm hoặc phím F1 để ẩn/hiện">
        <span>⚡ CHEAT</span>
      </button>

      <div id="cheat-panel">
        <div class="cheat-header">
          <div class="cheat-title">🛠️ BẢNG CHEAT</div>
          <button class="cheat-close" id="cheat-close-btn">✕</button>
        </div>

        <!-- 1. Máu vô hạn -->
        <div class="cheat-row">
          <div class="cheat-row-title">1. Bất tử (Máu vô hạn)</div>
          <button id="cheat-god-btn" class="cheat-btn">
            Máu vô hạn: <span id="cheat-god-text">TẮT</span>
          </button>
        </div>

        <!-- 2. Sát thương -->
        <div class="cheat-row">
          <div class="cheat-row-title">2. Sát thương (Dame): <span id="cheat-dame-val" class="cheat-dame-val">+0</span></div>
          <div class="cheat-btn-group">
            <button id="cheat-dame-p1" class="cheat-btn">+1 Dame</button>
            <button id="cheat-dame-p5" class="cheat-btn">+5</button>
            <button id="cheat-dame-m1" class="cheat-btn">-1</button>
            <button id="cheat-dame-rst" class="cheat-btn">Reset</button>
          </div>
        </div>

        <!-- 3. Tiện ích thêm -->
        <div class="cheat-row" style="margin-bottom:0">
          <div class="cheat-row-title">3. Tiện ích nhanh</div>
          <div class="cheat-quick-grid">
            <button id="cheat-lvl-btn" class="cheat-btn">⭐ +1 Cấp</button>
            <button id="cheat-spd-btn" class="cheat-btn">🏃 Tốc độ x2</button>
            <button id="cheat-magnet-btn" class="cheat-btn">🧲 Hút đồ</button>
            <button id="cheat-kill-btn" class="cheat-btn" style="color:#f87171">💀 Diệt quái</button>
          </div>
        </div>
      </div>
    `;

    // Ngăn chặn sự kiện click/touch/keyboard trên cheat menu lọt vào canvas game
    ['mousedown', 'mousemove', 'mouseup', 'click', 'touchstart', 'touchmove', 'touchend', 'keydown', 'keyup'].forEach(evt => {
      wrapper.addEventListener(evt, e => e.stopPropagation());
    });

    document.body.appendChild(wrapper);

    // Gán elements & events
    const toggleBtn = document.getElementById('cheat-toggle-btn');
    const panel = document.getElementById('cheat-panel');
    const closeBtn = document.getElementById('cheat-close-btn');
    const godBtn = document.getElementById('cheat-god-btn');
    const godText = document.getElementById('cheat-god-text');
    const dameVal = document.getElementById('cheat-dame-val');
    const spdBtn = document.getElementById('cheat-spd-btn');

    function updateUI() {
      // God mode UI
      if (window.CHEAT_GOD_MODE) {
        godBtn.classList.add('active');
        godText.textContent = 'ĐANG BẬT';
      } else {
        godBtn.classList.remove('active');
        godText.textContent = 'TẮT';
      }

      // Dame UI
      const sign = window.CHEAT_BONUS_ATK >= 0 ? '+' : '';
      dameVal.textContent = sign + window.CHEAT_BONUS_ATK;

      // Speed UI
      if (window.CHEAT_SPEED_MUL > 1) {
        spdBtn.classList.add('active');
        spdBtn.textContent = '🏃 Tốc độ: x2';
      } else {
        spdBtn.classList.remove('active');
        spdBtn.textContent = '🏃 Tốc độ: x1';
      }

      saveCheats();
    }

    // Toggle menu
    function togglePanel() {
      const isOpen = panel.classList.toggle('active');
      toggleBtn.style.display = isOpen ? 'none' : 'flex';
    }

    toggleBtn.onclick = togglePanel;
    closeBtn.onclick = togglePanel;

    // Phím tắt F1 để ẩn/hiện cheat menu
    window.addEventListener('keydown', e => {
      if (e.key === 'F1') {
        e.preventDefault();
        togglePanel();
      }
    });

    // 1. Toggle Máu vô hạn
    godBtn.onclick = () => {
      window.CHEAT_GOD_MODE = !window.CHEAT_GOD_MODE;
      if (window.CHEAT_GOD_MODE && window.G && G.Game && G.Game.player) {
        G.Game.player.hp = G.Game.player.maxHp;
        G.Game.player.dead = false;
        if (G.FX && G.FX.dmgText) G.FX.dmgText(G.Game.player.x, G.Game.player.y - 30, 'BẤT TỬ: BẬT', '#4ade80');
      }
      updateUI();
    };

    // 2. Sát thương
    document.getElementById('cheat-dame-p1').onclick = () => {
      window.CHEAT_BONUS_ATK = (window.CHEAT_BONUS_ATK || 0) + 1;
      showPlayerNotice('Sát thương +' + window.CHEAT_BONUS_ATK);
      updateUI();
    };
    document.getElementById('cheat-dame-p5').onclick = () => {
      window.CHEAT_BONUS_ATK = (window.CHEAT_BONUS_ATK || 0) + 5;
      showPlayerNotice('Sát thương +' + window.CHEAT_BONUS_ATK);
      updateUI();
    };
    document.getElementById('cheat-dame-m1').onclick = () => {
      window.CHEAT_BONUS_ATK = Math.max(0, (window.CHEAT_BONUS_ATK || 0) - 1);
      showPlayerNotice('Sát thương +' + window.CHEAT_BONUS_ATK);
      updateUI();
    };
    document.getElementById('cheat-dame-rst').onclick = () => {
      window.CHEAT_BONUS_ATK = 0;
      showPlayerNotice('Sát thương đặt lại');
      updateUI();
    };

    // 3. Tiện ích nhanh
    // +1 Cấp độ
    document.getElementById('cheat-lvl-btn').onclick = () => {
      const pl = window.G && G.Game && G.Game.player;
      if (pl) {
        pl.gainXp(pl.xpNext - pl.xp);
        if (G.Audio && G.Audio.sfx) G.Audio.sfx('levelup');
      }
    };

    // Tốc độ di chuyển
    spdBtn.onclick = () => {
      window.CHEAT_SPEED_MUL = window.CHEAT_SPEED_MUL === 1 ? 2 : 1;
      updateUI();
    };

    // Hút tất cả item/kinh nghiệm trên bản đồ
    document.getElementById('cheat-magnet-btn').onclick = () => {
      const pl = window.G && G.Game && G.Game.player;
      if (pl && window.G && G.Pickups) {
        const all = G.Pickups.all ? G.Pickups.all() : [];
        all.forEach(p => {
          p.x = pl.x;
          p.y = pl.y;
        });
        showPlayerNotice('Đã hút tất cả vật phẩm!');
      }
    };

    // Diệt quái trên màn hình
    document.getElementById('cheat-kill-btn').onclick = () => {
      const pl = window.G && G.Game && G.Game.player;
      if (window.G && G.EnemyMgr) {
        const enemies = G.EnemyMgr.all ? G.EnemyMgr.all() : [];
        let count = 0;
        enemies.forEach(e => {
          if (!e.dead && !e.boss) {
            e.hurt(999999, pl, null, true);
            count++;
          }
        });
        showPlayerNotice('Đã hạ ' + count + ' quái!');
      }
    };

    function showPlayerNotice(msg) {
      const pl = window.G && G.Game && G.Game.player;
      if (pl && window.G && G.FX && G.FX.dmgText) {
        G.FX.dmgText(pl.x, pl.y - 25, msg, '#fbbf24');
      }
    }

    updateUI();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCheatMenu);
  } else {
    initCheatMenu();
  }
})();

