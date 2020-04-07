import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import withData from '../../pages/HOC/withData'
import { device } from '../../theme/breakpoints'
import { formatCurrency } from '../../utils/currencyFormatter'

const Extract = ({ extract }) =>
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

Extract.propTypes = {
  extract: PropTypes.object
}

const S = {
  Extract: styled.section`
    margin: auto;
    background: var(--bg-primary);

    @media ${device.tablet} {
      width: 1200px;
    }
  `,
  Title: styled.div`
    margin-top: 22px;
    margin-bottom: 18px;
    font-size: 18px;
    font-weight: 600;
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
    padding: 12px 22px;
    font-weight: 600;
    color: #707AAD;
    background: var(--base-primary);
  `,
  Row: styled.tr`
    height: 26px;

    &:nth-child(even) {
      background: var(--base-primary);
    }
  `,
  Data: styled.td`
    width: 120px;
    height: 46px;
    padding: 8px 22px;
    vertical-align: middle;
  `
}

export default withData(Extract)
