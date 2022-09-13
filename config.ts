interface Environment {
  [x: string]: Configuration
}

interface Configuration {
  ApiBaseUrl: string
  ApiBaseUrlV2: string
  baseUrl: string
  publisherUrl: string
  FacebookAppId: string
  GoogleAppId: string
  PaypalClientId: string
  AppleClientId: string
  Domain: string
  TestDomain?: string
  SegmentWriteKey?: string
  SegmentAnonymousId?: string
  StripePublishableKey: string
  rewards: boolean
  appleLogin: boolean
  PaywallUrl: string
}

const configs: Environment = {
  dev: {
    PaywallUrl: 'https://dev.fewcents.co/static/js/paywall.js',
    ApiBaseUrl: 'https://api.hounds.fewcents.co/v1',
    ApiBaseUrlV2: 'https://api.hounds.fewcents.co/v2',
    publisherUrl: 'https://publisher.dev.fewcents.co',
    baseUrl: 'http://localhost:3000',
    FacebookAppId: '566170631436954',
    GoogleAppId: '52683014478-7b6790vtstromr5aookelnhad356k0j9.apps.googleusercontent.com',
    AppleClientId: 'co.fewcents.staging.wallet',
    PaypalClientId:
      'AUl-Hdtc3-Ugf6g-ddBzf3EIXgWunIj2Z2DvDq179vBz-HECBY0GvDhoQXPqFk7qfNOum_qESV1oT4dB',
    Domain: typeof window !== "undefined" ? window.location.host.includes('localhost')
      ? 'http://localhost:3000'
      : 'https://wallet.hounds.fewcents.co' : '',
    SegmentWriteKey: 'IFPpUcfPhlTmsGXTrW7uNkephCWRAvI3',
    SegmentAnonymousId: '98e1e30b-38ac-4ed7-8b0f-78f120fca01a',
    StripePublishableKey:
      'pk_test_51IibvmF0Pxu6i832PNSVoVMlt7nnCLGoM9oE0QGJ92fn7al69lhSkZcbN5YsgF7Fv52XGjqQ05HyvopbKEBtMxJS00C6wVx09Q',
    rewards: true,
    appleLogin: true,
  },
  qa: {
    PaywallUrl: 'https://paywall.qa.fewcents.co/static/js/paywall.js',
    ApiBaseUrl: 'https://api.qa.fewcents.co/v1',
    ApiBaseUrlV2: 'https://api.qa.fewcents.co/v2',
    publisherUrl: 'https://partner.qa.fewcents.co',
    baseUrl: 'https://qa.fewcents.me',
    FacebookAppId: '566170631436954',
    GoogleAppId: '52683014478-7b6790vtstromr5aookelnhad356k0j9.apps.googleusercontent.com',
    AppleClientId: 'co.fewcents.staging.wallet',
    PaypalClientId:
      'AUl-Hdtc3-Ugf6g-ddBzf3EIXgWunIj2Z2DvDq179vBz-HECBY0GvDhoQXPqFk7qfNOum_qESV1oT4dB',
    Domain: 'https://wallet.qa.fewcents.co',
    SegmentWriteKey: '4EtgVDZdQdxVm6jrZj5BMBNbflOudTKe',
    SegmentAnonymousId: 'b2242c56-2f45-4775-a9e9-f1528f256605',
    StripePublishableKey:
      'pk_test_51IibvmF0Pxu6i832PNSVoVMlt7nnCLGoM9oE0QGJ92fn7al69lhSkZcbN5YsgF7Fv52XGjqQ05HyvopbKEBtMxJS00C6wVx09Q',
    rewards: true,
    appleLogin: true,
  },
  staging: {
    PaywallUrl: 'https://staging.fewcents.co/static/js/paywall.js',
    ApiBaseUrl: 'https://api.demo.fewcents.co/v1',
    ApiBaseUrlV2: 'https://api.demo.fewcents.co/v2',
    publisherUrl: 'https://publisher.staging.fewcents.co',
    baseUrl: 'https://staging.fewcents.me',
    FacebookAppId: '566170631436954',
    GoogleAppId: '52683014478-7b6790vtstromr5aookelnhad356k0j9.apps.googleusercontent.com',
    AppleClientId: 'co.fewcents.staging.wallet',
    PaypalClientId:
      'ASSmSlO-ijUxgFYve7n4w0MornYvOQO9KRDf6RRgT3LxJqQBDvKw_PYTSNTVen0AhffEsDqhsLm6EICV',
    Domain: 'https://wallet.demo.fewcents.co',
    SegmentWriteKey: '1zKj2OWz036GjgbroTGQ7xhlgKFric0a',
    SegmentAnonymousId: 'c4f5b715-3f31-42a6-8778-c1d571e2ce23',
    StripePublishableKey:
      'pk_test_51IibvmF0Pxu6i832PNSVoVMlt7nnCLGoM9oE0QGJ92fn7al69lhSkZcbN5YsgF7Fv52XGjqQ05HyvopbKEBtMxJS00C6wVx09Q',
    rewards: false,
    appleLogin: true,
  },
  prod: {
    PaywallUrl: 'https://paywall.fewcents.co/static/js/paywall.js',
    ApiBaseUrl: 'https://api.fewcents.co/v1',
    ApiBaseUrlV2: 'https://api.fewcents.co/v2',
    publisherUrl: 'https://partner.fewcents.co',
    baseUrl: 'https://fewcents.me',
    FacebookAppId: '566170631436954',
    GoogleAppId: '52683014478-8i20g3lsae6h1kal220emv7i61d644hp.apps.googleusercontent.com',
    AppleClientId: 'co.fewcents.wallet',
    PaypalClientId:
      'AShVXQzDvmrRFif0LEMvcjmeFNulTdAM3Kgy7KvQQd38EI5kagV-l50UZ7ygomHoWRXOGYW-_AMJi8EZ',
    Domain: 'https://wallet.fewcents.co',
    SegmentWriteKey: 'ESNRYcxkkWHm321JICBQgcRJrGKDyBQ8',
    SegmentAnonymousId: '4767f188-5124-430d-b6a1-b932e1be1a77',
    StripePublishableKey:
      'pk_test_51IibvmF0Pxu6i832PNSVoVMlt7nnCLGoM9oE0QGJ92fn7al69lhSkZcbN5YsgF7Fv52XGjqQ05HyvopbKEBtMxJS00C6wVx09Q',
    rewards: false,
    appleLogin: true,
  },
}

const environment = process.env.NEXT_PUBLIC_STAGE?.trim() || 'dev'
const config = configs[environment]

export default config
