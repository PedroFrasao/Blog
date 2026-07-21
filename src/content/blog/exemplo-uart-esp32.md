---
title: "Depurando UART instável em um ESP32"
description: "Um caso real de bytes corrompidos na serial e como o problema foi rastreado até o clock do baud rate."
pubDate: 2026-07-10
tags: ["esp32", "uart", "debug"]
---

Um exemplo de post técnico, com bloco de código para mostrar como fica a
formatação:

```c
void setup() {
  Serial.begin(115200);
  Serial2.begin(9600, SERIAL_8N1, RX2, TX2);
}

void loop() {
  if (Serial2.available()) {
    uint8_t byte = Serial2.read();
    Serial.printf("RX: 0x%02X\n", byte);
  }
}
```

> Este é só um artigo de exemplo — substitua pelo seu conteúdo real ou
> apague este arquivo.

Você pode apagar tanto este artigo quanto `bem-vindo.md` assim que tiver
seus próprios posts.
