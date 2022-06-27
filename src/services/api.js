import axios from 'axios';

class API {
  constructor() {
    this.domain = 'https://release-mto.herokuapp.com/api/';
  }

  onCallAPI = (method, url, data = {}, params = {}, headers = {}) => {
    //function call api cho toàn project
    //data thường sẽ là 1 cục hình ảnh, 1 array hình ảnh
    //params là dữ liệu để truyền đi, (vd: điểm, token, 1 obj,...)
    //header chứa các thông tin dùng để đ nhập
    return axios({
      method: method,
      url: this.domain + url,
      data: data,
      params: params,
      headers: headers,
    });
  };
}

export default API;
