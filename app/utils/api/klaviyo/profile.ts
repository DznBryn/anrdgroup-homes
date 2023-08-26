import type { AppLoadContext } from "@remix-run/cloudflare";
import { KLAVIYO_API } from "~/libs/conts";

interface Props {
  data?: FormData
  context: CONTEXT_PROPS
}
interface CONTEXT_PROPS extends AppLoadContext {
  env?: ENV_PROPS
}
interface ENV_PROPS {
  KLAVIYO_TEST_API_KEY?: string
  KLAVIYO_API_VERSION?: string
}

type ProfileProps = {
  type: Object,
  id: string,
  attributes: {
    email: string,
    phone_number: string,

  },
  relationships: Object,
  links: Object
}
export function getKlaviyoHeaders({ context }: Props) {
  return {
    accept: 'application/json',
    revision: context.env?.KLAVIYO_API_VERSION ?? '2023-08-15',
    'content-type': 'application/json',
    Authorization: `Klaviyo-API-Key ${context.env?.KLAVIYO_TEST_API_KEY ?? 'pk_26edc3b29d54274c1756935a540e6e119f'}`,
  }
}

export async function createProfile({ data, context }: Props) {
  const url = KLAVIYO_API.PROFILES;
  const phone_number = String(data?.get('phone') ? '+1' + data.get('phone') : '')?.replace('-', '')
  const body = JSON.stringify({
    data: {
      type: 'profile',
      attributes: {
        email: data?.get('email') ?? '',
        phone_number,
        first_name: data?.get('first_name') ?? '',
        last_name: data?.get('last_name') ?? '',
        organization: '',
        title: '',
        image: '',
        location: {
          address1: data?.get('address') ?? '',
          address2: '',
          city: data?.get('city') ?? '',
          country: 'United States',
          region: data?.get('state') ?? '',
          zip: data?.get('zip') ?? '',
          timezone: '',
        },
        properties: { property_address: data?.get('address') ?? '' },
      },
    },
  })
  const options = {
    method: 'POST',
    headers: getKlaviyoHeaders({ context }),
    body,
  };

  try {
    const response = await fetch(url, options)
    const res: {
      data?: ProfileProps
    } = await response.json()
    if (res?.data?.id) {
      const subscribe = await subscribeProfile({ data: res.data, context })
      console.log('subscribe', subscribe?.errors[0])
      return res
    }
    return res
  } catch (error) {
    return {
      data: error,
    }
  }
}

type SubscribeProps = {
  data: ProfileProps,
  context: CONTEXT_PROPS
}
export async function subscribeProfile({ data, context }: SubscribeProps) {
  // const url = KLAVIYO_API.SUBSCRIBE;
  // const body = JSON.stringify({
  //   data: {
  //     type: 'profile-subscription-bulk-create-job',
  //     attributes: {
  //       custom_source: 'Marketing Event',
  //       profiles: {
  //         data: [
  //           {
  //             id: data.id,
  //             attributes: {
  //               email: data.attributes.email,
  //               phone_number: data.attributes.phone_number,
  //               subscriptions: { email: ['MARKETING'], sms: ['MARKETING'] }
  //             }
  //           }
  //         ]
  //       }
  //     },
  //     relationships: { list: { data: { type: 'list', id: KLAVIYO_API.SELLER_LIST } } }
  //   }
  // })
  // const options = {
  //   method: 'POST',
  //   headers: getKlaviyoHeaders({ context }),
  //   body,
  // };
  // console.log('SUBSCRIBE===>>', {
  //   body: {
  //     type: 'profile-subscription-bulk-create-job',
  //     attributes: {
  //       custom_source: 'Marketing Event',
  //       profiles: {
  //         data: [
  //           {
  //             id: data.id,
  //             attributes: {
  //               email: data.attributes.email,
  //               phone_number: data.attributes.phone_number,
  //               subscriptions: { email: ['MARKETING'], sms: ['MARKETING'] }
  //             }
  //           }
  //         ]
  //       }
  //     }
  //   }
  // })



  const url = 'https://a.klaviyo.com/api/profile-subscription-bulk-create-jobs/';
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      revision: '2023-08-15',
      'content-type': 'application/json',
      Authorization: 'Klaviyo-API-Key pk_26edc3b29d54274c1756935a540e6e119f'
    },
    body: JSON.stringify({
      data: {
        type: 'profile-subscription-bulk-create-job',
        attributes: {
          custom_source: 'Marketing Event',
          profiles: {
            data: [
              {
                type: 'profile',
                id: data.id,
                attributes: {
                  email: 'bryan@debybe.com',
                  phone_number: '+12014679093',
                  subscriptions: { email: ['MARKETING'], sms: ['MARKETING'] }
                }
              }
            ]
          }
        },
        relationships: { list: { data: { type: 'list', id: 'TcWxHw' } } }
      }
    })
  };
  try {
    const response = await fetch(url, options)
    const res = await response.json()
    return res
  } catch (error) {
    return {
      data: error,
    }
  }
}