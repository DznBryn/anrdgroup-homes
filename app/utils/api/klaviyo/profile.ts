import type { AppLoadContext } from "@remix-run/cloudflare";

interface Props {
  data?: FormData
  context: CONTEXT_PROPS
}
interface CONTEXT_PROPS extends AppLoadContext{
  env?: ENV_PROPS
}
interface ENV_PROPS {
  KLAVIYO_TEST_API_KEY?: string
}
export async function createProfile({ data, context }: Props){
  const url = 'https://a.klaviyo.com/api/profiles/';
  const options = {
    method: 'POST',
    headers: {
      accept: 'application/json',
      revision: context.env?.KLAVIYO_API_VERSION ?? '2023-08-15' ,
      'content-type': 'application/json',
      Authorization: `Klaviyo-API-Key ${context.env?.KLAVIYO_TEST_API_KEY ?? null}`,
    },
    body: JSON.stringify({
      data: {
        type: 'profile',
        attributes: {
          email: data?.get('email') ?? '',
          phone_number: data?.get('phone') ?? '',
          first_name: data?.get('first_name') ?? '',
          last_name: data?.get('last_name') ?? '',
          organization: '',
          title: '',
          image:'',
          location: {
            address1: '',
            address2: '',
            city: '',
            country: 'United States',
            region: 'NY',
            zip: '',
            timezone: '',
          },
          properties: { property_address: data?.get('address') ?? '' },
        },
      },
    }),
  };

  try {
    const response = await fetch(url, options)
    const res = await response.json()
    return {
      data: res,
    }
  } catch (error) {
    return {
      data: error,
    }
  }
}