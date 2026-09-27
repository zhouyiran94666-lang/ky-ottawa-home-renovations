const menuBtn=document.querySelector('.menu-btn');
const navLinks=document.querySelector('.nav-links');
if(menuBtn&&navLinks){menuBtn.addEventListener('click',()=>navLinks.classList.toggle('open'));}

document.querySelectorAll('.reveal').forEach(el=>{
  const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.12});
  observer.observe(el);
});

const form=document.querySelector('#estimate-form');
if(form){form.addEventListener('submit',e=>{
  e.preventDefault();
  const data=new FormData(form);
  const body=`Hi KY Ottawa Home Renovations, I'd like an estimate.\n\nName: ${data.get('name')}\nPhone: ${data.get('phone')}\nEmail: ${data.get('email')||'Not provided'}\nService: ${data.get('service')}\nProject: ${data.get('message')}`;
  window.location.href=`sms:+16138043868?&body=${encodeURIComponent(body)}`;
});}

// Homepage real-project photo carousel
(()=>{const el=document.getElementById('heroGallery');if(!el)return;const photos=['assets/ky-project-1.webp','assets/ky-opener.webp','assets/ky-van.webp'];let i=0;const dots=el.querySelector('.gallery-dots');const render=()=>{el.style.backgroundImage="url('"+photos[i]+"')";[...dots.children].forEach((d,n)=>d.classList.toggle('active',n===i));};photos.forEach((_,n)=>{const d=document.createElement('button');d.className='gallery-dot';d.type='button';d.setAttribute('aria-label','Show project photo '+(n+1));d.onclick=()=>{i=n;render()};dots.appendChild(d)});el.querySelector('.gallery-prev').onclick=()=>{i=(i-1+photos.length)%photos.length;render()};el.querySelector('.gallery-next').onclick=()=>{i=(i+1)%photos.length;render()};let startX=null;el.addEventListener('touchstart',e=>{startX=e.touches[0].clientX},{passive:true});el.addEventListener('touchend',e=>{if(startX===null)return;const dx=e.changedTouches[0].clientX-startX;if(Math.abs(dx)>45){i=(i+(dx<0?1:-1)+photos.length)%photos.length;render()}startX=null},{passive:true});render()})();
