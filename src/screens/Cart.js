import { FlatList, Text, View } from "react-native";
import { numberFormat } from "../services/numberFormat";

export const Cart = ({items, getTotalPrice}) => {

const totalPrice = getTotalPrice();

 const Total = ({totalPrice}) => (
  <View>
     <View style={{flex: 1, height: 1, backgroundColor: '#bdbebd', margin: 15}} />
    <View style={{ flexDirection: 'row', justifyContent: 'space-between', textAlignVertical: 'center'}}>
      <Text style={{ fontSize: 18}}>Total</Text>
      <Text style={{ fontSize: 18, fontWeight: 'bold'}}>{numberFormat(totalPrice)}</Text> 
    </View>
  </View>
 )

  return (
        <FlatList
            data={items}
            renderItem={({ item }) => { return (
                  <View style={{flexDirection: 'row', justifyContent:'space-between', textAlignVertical: 'center', marginBottom:10}}>
                    <Text style={{ fontSize: 18}}>{item.product.name} x {item.qty}</Text>
                    <Text style={{ fontSize: 18, fontWeight: 'bold'}}>{numberFormat(item.product.price * item.qty)}</Text>
                  </View>
            )}}
            ListFooterComponent= {() => <Total totalPrice={(totalPrice)}/>}
            style={{margin: 15}}
          />
    );
}