import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { useGlobalState } from '../../context'
import { device } from '../../theme/breakpoints'
import { formatCurrency } from '../../utils/currencyFormatter'
import api from '../../services/urwallet/api'

const Extract = () => {
  const { user } = useGlobalState()
  const [extract, setExtract] = useState([])

  useEffect(() => {
    async function fetchExtract () {
      const response = await api.get(`/accounts/${user.id}/transactions`)

      setExtract(response.data.transactions)
    }
    fetchExtract()
  }, [])

  return (
    <S.Extract>
      <S.Title>Suas Transações:</S.Title>
      <S.Wrapper>
        <S.Table>
          <S.Header>
            <S.Row>
              <S.Heading>Data</S.Heading>
              <S.Heading>Tipo</S.Heading>
              <S.Heading>Blockchain</S.Heading>
              <S.Heading>Quantia</S.Heading>
              <S.Heading>Valor Unit.</S.Heading>
            </S.Row>
          </S.Header>
          <S.Body>
            {extract.map((transaction, index) =>
              <S.Row key={index}>
                <S.Data>{transaction.timestamp}</S.Data>
                <S.Data>{transaction.type}</S.Data>
                <S.Data>{transaction.blockchain}</S.Data>
                <S.Data>{transaction.amount}</S.Data>
                <S.Data>{formatCurrency(transaction.value, 'USD')}</S.Data>
              </S.Row>
            )}
          </S.Body>
        </S.Table>
      </S.Wrapper>
    </S.Extract>
  )
}

const S = {
  Extract: styled.section`
    background: #FFF;
    margin: auto;

    @media ${device.tablet} {
      width: 1200px;
    }
  `,
  Title: styled.div`
    margin-top: 22px;
    font-weight: 600;
    font-size: 18px;
    margin-bottom: 18px;
  `,
  Table: styled.table`
    text-align: left;

    @media ${device.desktop} {
      width: 100%;
    }
  `,
  Wrapper: styled.div`
    overflow: auto;
  `,
  Body: styled.tbody``,
  Header: styled.thead``,
  Heading: styled.th`
    background: #F3F5FF;
    color: #707AAD;
    font-weight: 600;
    padding: 12px 22px;
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
