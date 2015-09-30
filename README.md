#AngularJS: Services

João Eduardo Montandon

Desenvolvimento de Aplicativos Web - 2015

*OBS: Para cada exercício deverá ser gerado pelo menos um commit referente ao mesmo.*

1. Altere o exercício que envolve a conversão de temperaturas de forma que a conversão seja feita por um Service.
2. Crie um serviço chamado CarrinhoDeCompras. Esse serviço deverá armazenar uma lista de itens. Cada item deverá conter sua descrição, preço, e quantidade. A seguir, crie dois controllers: ComprasController e CheckoutController. O ComprasController deverá permitir adicionar novos itens ao carrinho de compras. Já O CheckoutController deverá exibir os itens adicionados, junto do valor total do carrinho. *OBS: é possível que para este exercício você precise implementar várias visões.*
3. Crie um Serviço chamado LogService. Esse serviço deverá fazer o log de determinadas informações durante a execução do aplicativo. Para isso, o serviço deverá conter a função `log(nivel, mensagem)`, onde o parâmetro `nível` indica a severidade da mensagem (0 = aviso, 1 = erro), e o parâmetro `mensagem` contém a mensagem propriamente dita. Além disso o log deverá imprimir a data/hora do momento do recebimento da mensagem. *Dica: utilize as funções `console.log` e `console.error` para imprimir a mensagens de aviso e erro, respectivamente.*
