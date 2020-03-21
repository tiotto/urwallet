import React from 'react'
import styled from 'styled-components'

import { device } from '../../theme/breakpoints'

const Extract = (/*{data, type, blockchain, quantia, saldo }*/) =>
  <S.Extract>
    <S.Title>Últimas transações:</S.Title>
    <S.Table>
      <S.Header>
        <S.Row>
          <S.Heading>Data</S.Heading>
          <S.Heading>Tipo</S.Heading>
          <S.Heading>Blockchain</S.Heading>
          <S.Heading>Quantia</S.Heading>
          <S.Heading>Saldo</S.Heading>
        </S.Row>
      </S.Header>
      <S.Body>
        <S.Row>
          <S.Data>2020-03-12 09:36:52</S.Data>
          <S.Data>Compra</S.Data>
          <S.Data>Bitcoin</S.Data>
          <S.Data>1000</S.Data>
          <S.Data>-37.908,00</S.Data>
        </S.Row>
        {/* <S.Row>
          <S.Data>2020-03-12 09:36:52</S.Data>
          <S.Data>Compra</S.Data>
          <S.Data>Bitcoin</S.Data>
          <S.Data>1000</S.Data>
          <S.Data>-37.908,00</S.Data>
        </S.Row>
        <S.Row>
          <S.Data>2020-03-12 09:36:52</S.Data>
          <S.Data>Compra</S.Data>
          <S.Data>Bitcoin</S.Data>
          <S.Data>1000</S.Data>
          <S.Data>-37.908,00</S.Data>
        </S.Row> */}
      </S.Body>
    </S.Table>
  </S.Extract>

const S = {
  Extract: styled.section`
    background: #FFF;
    padding: 42px 52px;
    margin: auto;

    @media ${device.tablet} {
      width: 1200px;
    }
  `,
  Title: styled.div`
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 18px;
  `,
  Table: styled.table`
    text-align: left;
  `,
  Body: styled.tbody``,
  Header: styled.thead``,
  Heading: styled.th`
    font-weight: 600;
    padding: 8px 22px;
  `,
  Row: styled.tr`
    height: 26px;

    &:nth-child(even) {
      background: #F4F4F4;
    }
  `,
  Data: styled.td`
    padding: 8px 22px;
    width: 120px;
    height: 46px;
    vertical-align: middle;
  `
}

export default Extract
