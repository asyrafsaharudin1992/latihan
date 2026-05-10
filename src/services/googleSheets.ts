export const getSheetApiUrl = () => {
  return localStorage.getItem('googleSheetWebAppUrl') || '';
};

export const setSheetApiUrl = (url: string) => {
  localStorage.setItem('googleSheetWebAppUrl', url.trim());
};

export const sendSheetAction = async (action: string, payload: Record<string, any>) => {
  const urlStr = getSheetApiUrl();
  if (!urlStr) {
    throw new Error('Sila tetapkan URL Google Sheets Web App di bahagian tetapan Admin.');
  }

  const formData = new FormData();
  formData.append('action', action);
  Object.keys(payload).forEach(key => {
    formData.append(key, String(payload[key]));
  });

  try {
    const response = await fetch(urlStr, {
      method: 'POST',
      body: formData,
    });
    
    return await response.json();
  } catch (error: any) {
    console.error('Error connecting to Google Sheets:', error);
    throw new Error('Gagal menyambung ke pelayan Google Sheets. Sila pastikan URL anda adalah betul (script.google.com/macros/s/.../exec) dan anda mempunyai akses internet.');
  }
};
