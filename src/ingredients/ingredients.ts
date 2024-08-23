const form = document.getElementById(
  'sales-sheet-form'
) as HTMLFormElement | null;
const successEl = document.getElementById(
  'sales-sheet-success'
) as HTMLElement | null;

if (form && successEl) {
  const checkboxEls = Array.from(
    form.querySelectorAll<HTMLElement>('[data-input]')
  );
  const downloadLinks = Array.from(
    successEl.querySelectorAll<HTMLElement>('[data-product]')
  );

  const updateLinks = (): void => {
    checkboxEls.forEach((checkbox) => {
      const input = checkbox.querySelector<HTMLInputElement>('input');
      const inputData = checkbox.dataset.input;

      if (!input || !inputData) return;

      const checked = input.checked;

      downloadLinks.forEach((link) => {
        if (link.dataset.product === inputData) {
          link.classList.toggle('selected', checked);
        }
      });
    });
  };

  updateLinks();

  form.addEventListener('change', (event) => {
    if ((event.target as HTMLInputElement).matches('input[type="checkbox"]')) {
      updateLinks();
    }
  });
}
