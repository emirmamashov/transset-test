import { environment } from '../environments/environment';
const apiUrl = environment.apiUrl;
export const PageLimit = 30;

export const Methods = {
  post: 'POST',
  put: 'PUT',
  delete: 'DELETE',
  get: 'GET'
}

export const ApiConfig = {
    root_url: apiUrl,
    section: {
      checkFields: {
        url: apiUrl + '/checkFields',
        method: Methods.post
      },
      getAll: {
        url: apiUrl + '/sections',
        methos: Methods.get
      },
    }
}

export const NotifyConfig = {
  msgTypes: {
    primary: {
      styleName: 'bootstrap-primary',
      value: 'primary'
    },
    secondary: {
      styleName: 'bootstrap-secondary',
      value: 'secondary'
    },
    success: {
      styleName: 'bootstrap-success',
      value: 'success'
    },
    danger: {
      styleName: 'bootstrap-danger',
      value: 'danger'
    },
    warning: {
      styleName: 'bootstrap-warning',
      value: 'warning'
    },
    info: {
      styleName: 'bootstrap-info',
      value: 'info'
    },
    light: {
      styleName: 'bootstrap-light',
      value: 'light'
    },
    dark: {
      styleName: 'bootstrap-dark',
      value: 'dark'
    }
  }
};
