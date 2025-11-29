document.addEventListener('DOMContentLoaded', () => {
    const slapButton = document.getElementById('slap-button');
    const slapCountElement = document.getElementById('slap-count');
    const targetImage = document.getElementById('target-image');
    const slapSound = document.getElementById('slap-sound');

    let slapCount = 0;

    const handleSlap = () => {
        // 1. Sayacı artır
        slapCount++;
        slapCountElement.textContent = slapCount;

        // 2. Sesi çal
        slapSound.currentTime = 0; // Sesin her tıklamada baştan başlamasını sağlar
        slapSound.play().catch(error => {
            // Tarayıcılar otomatik çalmayı engelleyebilir. Konsolda hata gösterilebilir.
            console.log("Ses çalınamadı. Kullanıcı etkileşimi gerekiyor.", error);
        });

        // 3. Geçici görsel efekt (CSS'te tanımlı olan :active ile birlikte çalışır)
        targetImage.classList.add('slapped');
        setTimeout(() => {
            targetImage.classList.remove('slapped');
        }, 100); 
    };

    // Buton ve görsele tıklanma olaylarını dinle
    slapButton.addEventListener('click', handleSlap);
    targetImage.addEventListener('click', handleSlap);
});
