import React from "react";
import { MdAddShoppingCart } from "react-icons/md";

import { ProductList } from "./styles";

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-infantil-nike-flex-runner-td/26/HZM-1463-026/HZM-1463-026_detalhe2.jpg?resize=326:*"
          alt=""
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-infantil-nike-flex-runner-td/26/HZM-1463-026/HZM-1463-026_detalhe2.jpg?resize=326:*"
          alt=""
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>

      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-infantil-nike-flex-runner-td/26/HZM-1463-026/HZM-1463-026_detalhe2.jpg?resize=326:*"
          alt=""
        />
        <strong>Tênis muito legal</strong>
        <span>R$129,90</span>

        <button type="button">
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>
          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
