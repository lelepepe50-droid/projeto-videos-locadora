function fnValidacao(event){
    if (event) event.prevetDefault();

  const campoTituloFilme = document.getElementById("tituloFilme")
  const campoTituloOriginal = document.getElementById("tituloOriginal");
  const campoAnoProducao = document.getElementById("anoProducao")
  const campodataLancamento = document.getElementById("dataLancamento")
  const campoduracaoMinutos = document.getElementById("duracaoMinutos") 
  const campogeneroPrincipal = document.getElementById("generoPrincipal")
  const camposubgenero = document.getElementById("subgenero")
  const campoclassificacao = document.getElementById("classificacao")
  const campopaisOrigem = document.getElementById("paisOrigem")
  const campoidiomaOriginal = document.getElementById("idiomaOriginal")
  const campodiretor = document.getElementById("diretor")
  const campoprodutora = document.getElementById("produtora")
  const campodistribuidora = document.getElementById("distribuidora")
  const campoorcamento = document.getElementById("orcamento")
  const camporeceitaBilheteria = document.getElementById("receitaBilheteria")
  const camponotaMedia = document.getElementById("notaMedia")
  const campostatus = document.getElementById("status")
  const campostreaming = document.getElementById("streaming")


 
    if(campoTituloFilme.value.trim() == ""){
        return alert('Preencha o campo Titulo Filme');
    }
 
    if(campoTituloFilme.value.length <= 1){
        return alert ("Quantidade de caracteres minima é de 1");
    }
 
    if(campoTituloFilme.value.length >= 200){
        return alert("Quantidade máxima de caracteres é de 200");
    }
 
    if(campoTituloOriginal.value.trim() == ""){
        return console.log('Preencha o campo Titulo Original')
    }

    if(campoAnoProducao.value.trim() == ""){
        return console.log('preencha o campoanoProducao')
    }

    if(campoduracaoMinutos.value.trim() == ""){
        return console.log('preencha o campoduracaoMinutos')
    }

    if(campodataLancamento.value.trim() == ""){
        return console.log('preenchar o campodataLancamento')
    }

     if(campogeneroPrincipal.value.trim() == ""){
        return console.log('preenchar o campogeneroPrincipal')
    }

     if(camposubgenero.value.trim() == ""){
        return console.log('preenchar o camposubgenero')
    }

    if(campoclassificacao.value.trim() == ""){
        return console.log('preenchar o campoclassificacao')
    }
     
    if(campopaisOrigem.value.trim() == ""){
        return console.log('preenchar o campopaisOrigem')
    }

    if(campoidiomaOriginal.value.trim() == ""){
        return console.log('preenchar o campoidiomaOriginal')
    }

    if(campodiretor.value.trim() == ""){
        return console.log('preenchar o campodiretor')
    }

    if(campoprodutora.value.trim() == ""){
        return console.log('preenchar o campoprodutora')
    }

    if(campodistribuidora.value.trim() == ""){
        return console.log('preenchar o campodistribuidora')
    }

    if(campoorcamento.value.trim() == ""){
        return console.log('preenchar o campoorcamento')
    }

    if(camporeceitaBilheteria.value.trim() == ""){
        return console.log('preenchar o camporeceitaBilheteria')
    }

    if(camponotaMedia.value.trim() == ""){
        return console.log('preenchar o camponotaMedia')
    }


     if(campostatus.value.trim() == ""){
        return console.log('preenchar o campostatus')
    }
    if(campostreaming.value.trim() == ""){
        return console.log('preenchar o campostreaming')
    }






 
   
 
    console.log("Título:", campoTituloFilme.value);
    console.log("Original:", campoTituloOriginal.value);
    console.log("Ano de Produção:", campoAnoProducao.value);
    console.log("dataLancamento:", campodataLancamento.value);
    console.log("duracaoMinutos", campoduracaoMinutos.value);
    console.log("generoPrincipal", campogeneroPrincipal.value);
    console.log("subgenero", camposubgenero.value);
    console.log("subgenero", campoclassificacao.value);
    console.log("subgenero", campopaisOrigem.value);
    console.log("subgenero", campoidiomaOriginal.value);
    console.log("subgenero", campodiretor.value);
    console.log("subgenero", campoprodutora.value);
    console.log("subgenero", campodistribuidora.value);
    console.log("subgenero", campoorcamento.value);
    console.log("subgenero", camporeceitaBilheteria.value);
    console.log("subgenero", camponotaMedia.value);
    console.log("subgenero", campostatus.value);
    console.log("subgenero", campostreaming.value);
}

