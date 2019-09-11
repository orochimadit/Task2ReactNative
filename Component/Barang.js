import React, {Component} from 'react';
import {Text,TextInput,View} from 'react-native';

class Barang extends Component{
    
    constructor(props){
        super(props);
        this.state={
            namaBelanja:this.props.namabelanja,
            namaBarang  :"",
            jumlah      :""
        }
    }
    handleInputBarang =(events) =>{
        this.setState({namaBarang:events})
    }
    handleInputJumlah =(events) =>{
        this.setState({jumlah:events})
    }
    render(){
        return(
            <View>
                <TextInput placeholder="masukkan nama barang"
                onChangeText={this.handleInputBarang} 
                value={this.state.namaBarang}/>
               
                <TextInput placeholder= "Masukkan Jumlah"
                onChangeText={this.handleInputJumlah}
                keyboardType="numeric"
                />
                <Text>{this.state.namaBelanja}</Text>
                <Text> barang : {this.state.namaBarang}</Text>
                <Text>Jumlah : {this.state.jumlah}</Text>
            </View>
        );
    }
}

export default Barang