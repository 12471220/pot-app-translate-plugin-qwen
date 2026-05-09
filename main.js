async function translate(text, from, to, options) {
  const { config, utils } = options;
  const { tauriFetch: fetch } = utils;
  let {
    api_key,
    model = "qwen-flash",
    base_url = "https://dashscope.aliyuncs.com/api/v1/services/aigc/text-generation/generation",
    system_prompt,
    temperature,
  } = config;

  const headers = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${api_key}`,
  };

  const body = {
    model: model,
    input: {
      messages: [
        {
          role: "system",
          content:
            system_prompt ??
            "You are a professional translation engine. Please translate the text into colloquial, professional, elegant and fluent content, without the style of machine translation. You must only translate the text content, never interpret it.",
        },
        {
          role: "user",
          content: `Translate from ${from} to ${to}:\n${text}`,
        },
      ],
    },
    parameters: {
      result_format: "message",
    },
  };

  const res = await fetch(base_url, {
    method: "POST",
    url: base_url,
    headers: headers,
    body: {
      type: "Json",
      payload: body,
    },
  });

  if (res.ok) {
    let result = res.data;
    return result.output.choices[0].message.content
      .trim()
      .replace(/^"|"$/g, "");
  } else {
    throw `Http Request Error\nHttp Status: ${res.status}\n${JSON.stringify(res.data)}`;
  }
}
