var solveSudoku = function(board) {
    let list=[];
    for(let i=0;i<9;i++){
        for(let j=0;j<9;j++){
            if(board[i][j]=='.'){
                list.push([i,j])
            }
        }
    }
    let listLen=list.length;
    let res=[];
    let iteration=function(cur){
        if(cur==listLen){
            
            return 1;
        }
        let temp=list[cur];
        let has=new Array(10).fill(0);

        let temp1=temp[0]-temp[0]%3;
        let temp2=temp[1]-temp[1]%3;

        for(let i=0;i<3;i++){
            for(let j=0;j<3;j++){
                if(board[temp1+i][temp2+j]!='.')
                    has[board[temp1+i][temp2+j]]=1;
            }
        }

        for(let i=0;i<9;i++){
            if(board[temp[0]][i]!='.')
                has[board[temp[0]][i]]=1;
             if(board[i][temp[1]]!='.')
                has[board[i][temp[1]]]=1;
        }
        let choose=[];

        for(let i=1;i<10;i++){
            if(has[i]==0){
                choose.push(i);
            }
        }
        // console.log(choose)
        for(let item in choose){
            board[temp[0]][temp[1]]=choose[item]+"";
            
            if(iteration(cur+1)==1){
                return 1;
            }
        }
        board[temp[0]][temp[1]]='.';
        return 0;


    }
    if(iteration(0)==1)
        return board;
    return;
   
};