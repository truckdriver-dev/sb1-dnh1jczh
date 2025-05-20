import { CardTemplate } from '../types/card';

export const defaultTemplate: CardTemplate = {
  id: 'sbt-card',
  name: 'SBT Card',
  type: 'crypto',
  width: 400,
  height: 250,
  backgroundColor: '#0F172A',
  imagePosition: {
    top: 20,
    left: 20,
    width: 80,
    height: 80,
    borderRadius: 40
  },
  text: {
    title: 'SBT CARD',
    subtitle: '1234 5678 9012 3456',
    name: 'CARDHOLDER',
    contact: '12/25',
    message: ''
  },
  textStyles: {
    title: {
      label: 'Card Title',
      placeholder: 'SBT CARD',
      description: 'Card title (non-editable)',
      color: '#94A3B8',
      fontSize: 24,
      fontWeight: 700,
      lineHeight: '1.2',
      textAlign: 'right',
      marginTop: 20,
      marginLeft: 120,
      marginRight: 20,
      multiline: false
    },
    subtitle: {
      label: 'Card Number',
      placeholder: '1234 5678 9012 3456',
      description: 'Card number (non-editable)',
      color: '#E2E8F0',
      fontSize: 20,
      fontWeight: 500,
      lineHeight: '1.4',
      textAlign: 'left',
      marginTop: 100,
      marginLeft: 20,
      marginRight: 20,
      multiline: false
    },
    name: {
      label: 'Cardholder Name',
      placeholder: 'CARDHOLDER',
      description: 'Enter your name',
      color: '#CBD5E1',
      fontSize: 18,
      fontWeight: 600,
      lineHeight: '1.4',
      textAlign: 'left',
      marginTop: 40,
      marginLeft: 20,
      marginRight: 20,
      multiline: false
    },
    contact: {
      label: 'Expiry',
      placeholder: '12/25',
      description: 'Expiry date (non-editable)',
      color: '#94A3B8',
      fontSize: 16,
      fontWeight: 400,
      lineHeight: '1.4',
      textAlign: 'right',
      marginTop: -25,
      marginLeft: 20,
      marginRight: 20,
      multiline: false
    },
    message: {
      label: 'Hidden Message',
      placeholder: '',
      description: '',
      color: '#475569',
      fontSize: 12,
      fontWeight: 400,
      lineHeight: '1.4',
      textAlign: 'left',
      marginTop: 0,
      marginLeft: 20,
      marginRight: 20,
      multiline: false
    }
  }
};

export const allTemplates: CardTemplate[] = [defaultTemplate];