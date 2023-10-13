const BASE_URL ='http://localhost:5000';
export const FASHION_URL= BASE_URL + ('/api/fashions');
export const FASHION_TAGS_URL= FASHION_URL + '/tags';
export const FASHION_BY_SEARCH_URL= FASHION_URL + '/search/';
export const FASHION_BY_TAG_URL= FASHION_URL + '/tag/';
export const FASHION_BY_ID_URL= FASHION_URL + '/';


export const USER_LOGIN_URL = BASE_URL + '/api/users/login';
export const USER_REGISTER_URL = BASE_URL + '/api/users/register';

export const ORDERS_URL = BASE_URL + '/api/orders';
export const ORDER_CREATE_URL = ORDERS_URL + '/create';
export const ORDER_NEW_FOR_CURRENT_USER_URL = ORDERS_URL + '/newOrderForCurrentUser';
export const ORDER_PAY_URL = ORDERS_URL + '/pay';