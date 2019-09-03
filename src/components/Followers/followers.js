import React, { PureComponent } from 'react';
import styles from './followers.module.css';
import { getData, getIsLoading, getError } from './../../modules/Followers/reducer';
import { fetchRequest } from './../../modules/Followers';
import { connect } from 'react-redux';
import cx from 'classnames';

class Followers extends PureComponent {
  render() {
    const { data, isLoading, error } = this.props;

    if (isLoading) { 
      return <p>Loading...</p>
    }

    if (error) { 
      return <p>{ error.toString() }</p>
    }

    if (!data.length) {
      return <p className="t-no-followers">Followers not find</p>
    }
      

    return (
      <div className={cx(styles.root, 't-followers')}>
        {
          data.map(({ id, avatar_url, login }) => (
            <div key={id} className={ styles.follower }>
              <img className={ styles.followerImg } src={ avatar_url } alt={ login } />
              <p className={ styles.followerLogin }>{ login } </p>
            </div>
          ))
        }
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

export default connect( mapStateToProps, mapDispatchToProps )(Followers);
