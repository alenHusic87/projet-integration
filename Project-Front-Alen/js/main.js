	var noti = document.querySelector('h2');
	var select = document.querySelector('.select');
	var button = document.getElementsByTagName('button');
	for(var but of button)
	{
		but.addEventListener('click', (e)=>
		{
			var add = Number(noti.getAttribute('data-count') || 0);
			noti.setAttribute('data-count', add +1);
			noti.classList.add('zero')
			
		
			var parent = e.target.parentNode;
			var clone = parent.cloneNode(true);
			select.appendChild(clone);
			clone.lastElementChild.innerText = "Buy-now";
			
			if (clone) 
			{
				noti.onclick = ()=>
				{
					select.classList.toggle('display');
				}	
			}
		})
		

	}
	function afficherMoreImg() 
	{
	  document.body.style.backgroundColor = "#f3f3f3";
	  document.body.style.backgroundImage = "url('img_tree.png')";
	}

	function showImage(imgs) 
	{
		var expandImg = document.getElementById("expandedImg");
		expandImg.src = imgs.src;
		expandImg.parentElement.style.display = "grid;";
	
	}

	function openAPage()
	{
	   window.location.href = 'produit.html';
	}

	var select = document.querySelector('.select');
	var button = document.getElementsByTagName('button');
	for(var but of button)
	{
		but.addEventListener('click', (e)=>
		{
			var add = Number(noti.getAttribute('data-count') || 0);
			noti.setAttribute('data-count', add +1);
			noti.classList.add('zero')
			
		
			var parent = e.target.parentNode;
			var clone = parent.cloneNode(true);
			select.appendChild(clone);
			clone.lastElementChild.innerText = "Buy-now";
			
			if (clone) 
			{
				noti.onclick = ()=>
				{
					select.classList.toggle('display');
				}	
			}
		})

	}
