import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground
} from 'react-native';

import * as Animatable from 'react-native-animatable'

const initialState = {
  login: 'a',
  business: 'a',
  password: 'assds',
  toggleEnter: false,

  name: '',
  lastName: '',
  username: '',
  newPassword: '',
  authPassword: '',
  email: ''
}
export default class Login extends Component {

  state = {
    ...initialState
  }
  pathToMainPage = () => {
    this.props.navigation.navigate('TelaA')
  }
  authentication = () => {
    if (!this.state.toggleEnter) {
      if (this.state.login.trim() && this.state.business.trim() && this.state.password.trim()) {
        Alert.alert('Sucesso!', 'Login realizado corretamente')
        this.pathToMainPage()
      } else {
        return Alert.alert('Ops, ocorreu um erro!', 'Todos os campos precisam ser preenchidos. ')
      }
    } else {
      if (this.state.name.trim() && this.state.lastName.trim() &&
        this.state.username.trim() && this.state.email.trim() && this.state.newPassword.trim() == this.state.authPassword.trim()) {
        Alert.alert('Sucesso!', 'Cadastro realizado corretamente')
        this.pathToMainPage()
      } else {
        if (this.state.newPassword != this.state.authPassword) {
          Alert.alert('Ops, ocorreu um erro!', 'As senhas não são identicas! ')
        } else {
          Alert.alert('Ops, ocorreu um erro!', 'Todos os campos precisam ser preenchidos. ')
        }
      }
    }
  }
  render() {
    return (
      <ImageBackground source={require('../assets/Imgs/login.jpg')} style={styles.image}>

        <View style={styles.container}>
          <Animatable.Image
            animation='bounceInDown'
            duration={1200}
            source={require('../assets/Imgs/hamburguer.png')}
            style={{ width: 220, height: 220 }} />

          <Animatable.View
            style={styles.formContainer}
            animation='bounceInUp'
            duration={1200}>

            {/* Login */}
            {!this.state.toggleEnter && <TextInput placeholder='Login' style={styles.input}
              value={this.state.login}
              onChangeText={login => this.setState({ login })} />}
            {!this.state.toggleEnter && <TextInput placeholder='Filial' style={styles.input}
              value={this.state.business}
              onChangeText={business => this.setState({ business })} />}
            {!this.state.toggleEnter && <TextInput placeholder='Senha' style={styles.input}
              value={this.state.password}
              onChangeText={password => this.setState({ password })}
              secureTextEntry={true} />}


            {/* Cadastro */}
            {this.state.toggleEnter && <TextInput placeholder='Nome' value={this.state.name}
              onChangeText={name => this.setState({ name })}
              style={styles.input} />
            }
            {this.state.toggleEnter && <TextInput placeholder='Sobrenome' value={this.state.lastName}
              onChangeText={lastName => this.setState({ lastName })}
              style={styles.input} />
            }
            {this.state.toggleEnter && <TextInput placeholder='Nome de Usuário' value={this.state.username}
              onChangeText={username => this.setState({ username })}
              style={styles.input} />
            }
            {this.state.toggleEnter && <TextInput placeholder='Email' value={this.state.email}
              onChangeText={email => this.setState({ email })}
              style={styles.input} />
            }
            {this.state.toggleEnter && <TextInput placeholder='Senha' value={this.state.newPassword}
              onChangeText={newPassword => this.setState({ newPassword })}
              style={styles.input} secureTextEntry={true} />
            }
            {this.state.toggleEnter && <TextInput placeholder='Confirme sua senha' value={this.state.authPassword}
              onChangeText={authPassword => this.setState({ authPassword })}
              style={styles.input} secureTextEntry={true} />
            }

            <TouchableOpacity activeOpacity={0.5} onPress={this.authentication}>
              <View style={styles.button}>
                <Text style={{ color: '#FFF' }}>
                  {this.state.toggleEnter ? 'Cadastrar' : 'Acessar'}
                </Text>
              </View>
            </TouchableOpacity>
          </Animatable.View>
          <TouchableOpacity activeOpacity={0.5} onPress={() => this.setState({ toggleEnter: !this.state.toggleEnter })}>
            <Text style={{ color: '#FFF', paddingTop: 10, fontSize: 20 }}>
              {this.state.toggleEnter ? 'Já possui conta?' : 'Ainda não possui conta?'}
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column"
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  text: {
    color: "grey",
    fontSize: 30,
    fontWeight: "bold"
  },
  formContainer: {
    backgroundColor: '#2A2A2A',
    padding: 20,
    width: '80%',
    borderRadius: 20
  },
  input: {
    paddingTop: 8,
    borderRadius: 8,
    marginTop: 10,
    backgroundColor: '#FFF',
  },
  button: {
    backgroundColor: '#19D346',
    marginTop: 15,
    padding: 10,
    alignItems: 'center',
    borderRadius: 8

  }
});


