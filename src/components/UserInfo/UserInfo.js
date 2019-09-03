import React, { PureComponent } from 'react';
import styles from './UserInfo.module.css';
import { getData, getIsLoading, getError } from './../../modules/User/reducer';
import { fetchRequest } from './../../modules/User';
import { connect } from 'react-redux';

class UserInfo extends PureComponent {
  
  render() {
    const { data, isLoading, error } = this.props;

    if (isLoading) {
      return <p>Loading...</p>
    }

    if (error) { 
      return <p>{error}</p>
    }

    if (!data) {
      return <p className="t-no-user-info">Not find user</p>
    }

    return (
      <div className={ styles.root }>
        <div className={ styles.imageWrapper }>
          <img className={ styles.image } src={ data.avatar_url } alt="user info"/>
        </div>

        <div>
          <p className="t-user-name">{data.name}</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: getData(state),
  isLoading: getIsLoading(state),
  error: getError(state)
});
const mapDispatchToProps = { fetchRequest };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserInfo);
