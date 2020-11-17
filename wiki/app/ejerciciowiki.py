import wikipedia

class buscador:

    wikipedia.set_lang("es") 
    busqueda = input("Buscar: ") 
    pag = wikipedia.page(busqueda)



    print("title: " + pag.title )
    print("URL: " + pag.url)
    print("Consultas mas buscadas en wikipedia sobre "+ busqueda)
    print(wikipedia.search(str(busqueda), results = 5, suggestion = True ))

    print("Buscando...")
    print(wikipedia.summary(busqueda))

    print("Capturando fotos asociadas a la busqueda...")
    print(pag.images)


