
# mercadopago-sample

Sample of mercadopago implementation

*Pongo la documentación en español porque, hasta donde yo sepa, no existe Mercadopago en ningún lugar de habla inglesa.

Tienes que agregar un archivo config.json con el siguiente formato:

```json
{
    "client_id": "AQUI_VA_TU_CLIENT_ID",
    "client_secret": "AQUI_VA_TU_CLIENT_SECRET",
    "access_token": "AQUI_TU_ACCESS_TOKEN",
    "public_key": "AQUI_TU_PUBLIC_KEY",
    "amount": AQUI_EL_MONTO_NUMÉRICO_DE_LA_TRANSACCIÓN_DE_PRUEBA,
    "port": EL_PUERTO_PARA_PRUEBAS
}
```

Ejemplo:

```json
{
    "client_id": "26888395666401533",
    "client_secret": "w0REmc9PHx698frjdWpimi2hHPW454DF",
    "access_token": "TEST-88329056549938565123-087654-7e9cce058977bfd9e6a9f9bb5333902f-098765432",
    "public_key": "TEST-bb3af60b-0234-87cb-9f36-6a0766caf987",
    "amount": 2400,
    "port": 8080
}
```

Para instalar:

```shell
npm install
```

Puedes probar con las siguientes tarjetas:

- *Visa* 4075 5957 1648 3764
- *MasterCard* 5474 9254 3267 0366
- *Amex* 3766 7520 5781 151 (Recuerda que esta tiene un cvv de 4 dígitos)
  
Para probar distintas respuestas intenta agregando los siguentes prefijos en el nombre del titular

- APRO: Pago aprobado
- CONT: Pago pendiente
- CALL: Rechazo llamar para autorizar
- FUND: Rechazo por monto insuficiente
- SECU: Rechazo por código de seguridad
- EXPI: Rechazo por fecha de expiración
- FORM: Rechazo por error en formulario
- OTHE: Rechazo general