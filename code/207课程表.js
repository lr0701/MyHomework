function canFinish(numCourses, prerequisites) {
    const graph = Array(numCourses).fill(null).map(() => []);
    const inDegree = Array(numCourses).fill(0);


    prerequisites.forEach(([b, a]) => {
        graph[a].push(b);
        inDegree[b]++;
    });


    const queue = [];
    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    let count = 0;
    while (queue.length) {
        const course = queue.shift();
        count++;
        graph[course].forEach(neighbor => {
            if (--inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        });
    }

    return count === numCourses;
}

console.log(canFinish(2, [[1, 0]]));  
console.log(canFinish(2, [[1, 0], [0, 1]]));  
