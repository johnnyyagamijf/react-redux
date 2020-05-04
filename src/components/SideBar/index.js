import React, { Component } from 'react'
import { connect } from 'react-redux'

import {changeUser} from '../../store/actions/usuario';
import './styles.css';

export class Sidebar extends Component {
  render() {
    return (
      <ul>
        {
        this.props.usuarios.list.map((user, index) =>(
        <li key={index}>
          <label class="container-input">{user}
          <input 
        type="radio"  
        name="user"  
        value={user}
        onClick={e => this.props.changeUser(e.target.value)}
        /> 
            <span class="checkmark"></span>
          </label>
         
         </li>
         ))
      }
      </ul>
    )
  }
}

const mapStateToProps = (state) => ({
  usuarios: state.usuariosReducer
});

const mapDispatchToProps = dispatch => ({
  changeUser: user => dispatch(changeUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
