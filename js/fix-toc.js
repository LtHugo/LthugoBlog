document.addEventListener('DOMContentLoaded', function() {
  // 只修复 TOC 跳转，不干预任何其他元素
  document.querySelectorAll('.post-toc a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => e.stopImmediatePropagation());
  });
});