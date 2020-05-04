import React, { Component } from 'react'
import { connect } from 'react-redux'

import './styles.css';
export class Usuarios extends Component {
  render() {
    return (
      <div className="user">
          <article>
            <strong>Usuário: {this.props.usuarios.active}</strong>
            <p>{this.props.usuarios.active}</p>
          </article>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  usuarios: state.usuariosReducer
});

const mapDispatchToProps = {
  
}

export default connect(mapStateToProps, mapDispatchToProps)(Usuarios)
