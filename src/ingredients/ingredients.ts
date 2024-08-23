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
  const submitBtn = form.querySelector(
    '.form-button'
  ) as HTMLButtonElement | null;
  const errorMsg = form.querySelector(
    '.form-checkbox-error'
  ) as HTMLElement | null;

  if (submitBtn && errorMsg) {
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

    const isAtLeastOneChecked = (): boolean => {
      return checkboxEls.some((checkbox) => {
        const input = checkbox.querySelector<HTMLInputElement>('input');
        return input?.checked ?? false;
      });
    };

    const validateForm = (): void => {
      if (isAtLeastOneChecked()) {
        errorMsg.style.display = 'none';
        submitBtn.disabled = false;
      } else {
        errorMsg.style.display = 'block';
        submitBtn.disabled = true;
      }
    };

    form.addEventListener('change', (event) => {
      if (
        (event.target as HTMLInputElement).matches('input[type="checkbox"]')
      ) {
        updateLinks();
        validateForm();
      }
    });

    submitBtn.addEventListener('click', (event) => {
      if (!isAtLeastOneChecked()) {
        event.preventDefault();
        errorMsg.style.display = 'block';
      }
    });
  }
}
