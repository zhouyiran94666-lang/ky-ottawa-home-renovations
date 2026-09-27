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