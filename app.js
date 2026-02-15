document.addEventListener('DOMContentLoaded', () => {
   const fiocco = document.querySelector('.fiocco');
   const preload = document.querySelector('.preload');
   const sposi = document.querySelector('.sposi');
   const selezione = document.querySelector('.selezione');
   const input = document.querySelector('.btnIban');
   const copyBtn = document.getElementById('copyBtn');
   document.body.style.overflow = "hidden";
   fiocco?.addEventListener('click', startInvito);
   sposi.classList.add('hide');
   selezione.addEventListener('click', activeLocation);

   function startInvito() {
      setInterval(() => {
         preload.classList.add('hide');
      }, 100);

      setInterval(() => {
         preload.classList.add('hidden');
         sposi.classList.remove('hide');
         document.body.style.overflow = "";
      }, 400)
   }

   document.getElementById("addToCalendar").addEventListener("click", function () {

      const icsContent =
         "BEGIN:VCALENDAR\r\n" +
         "VERSION:2.0\r\n" +
         "CALSCALE:GREGORIAN\r\n" +
         "BEGIN:VEVENT\r\n" +
         "UID:promessa-biagio-noemi-20260327\r\n" +
         "DTSTAMP:20260201T120000Z\r\n" +
         "SUMMARY:Promessa Biagio e Noemi\r\n" +
         "DESCRIPTION:Ore 11:00 Comune\\nOre 20:00 Ricevimento\\nImperium Eventi da Favola\r\n" +
         "LOCATION:Comune Marigliano / Imperium Eventi da Favola\r\n" +
         "DTSTART:20260327T100000Z\r\n" +
         "DTEND:20260327T223000Z\r\n" +
         "END:VEVENT\r\n" +
         "END:VCALENDAR\r\n";

      const blob = new Blob([icsContent], {
         type: "text/calendar;charset=utf-8"
      });

      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");

      link.href = url;
      link.download = "promessa-biagio-noemi.ics";

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

   });


   function activeLocation(e) {
      const button = e.target.closest('button');
      if (!button) return;
      const id = button.dataset.id;
      document.querySelectorAll('.selezione button').forEach(btn => btn.classList.remove('activeBtn'));
      button.classList.add('activeBtn');

      document.querySelectorAll('.geo img').forEach(image => {
         image.classList.remove('visibility');
         if (image.dataset.id === id) {
            image.classList.add('visibility');
         }
      })

      document.querySelectorAll('.evento').forEach(ev => {
         ev.classList.remove('visibility');
         if (ev.dataset.id === id) {
            ev.classList.add('visibility');
         }
      })
   }

})