
export const API_CONFIG = {
  BASE_URL: 'https://svcdgjkk16.execute-api.us-east-1.amazonaws.com',
  ENDPOINTS: {
    GET_INVITE_DATA: '/invites/getInviteData',
  },
  DEFAULT_INVITE_ID: '836d7ee9-f0c3-4789-95f6-aef0f83d3790'
};

export const getApiUrl = (endpoint: string) => `${API_CONFIG.BASE_URL}${endpoint}`;
