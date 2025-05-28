function findOrder(numCourses, prerequisites) {
    const graph = Array.from({length: numCourses}, () => []);
    const inDegree = new Array(numCourses).fill(0);
    const queue = [];
    const result = [];

    prerequisites.forEach(([b, a]) => {
        graph[a].push(b);
        inDegree[b]++;
    });

    for (let i = 0; i < numCourses; i++) {
        if (inDegree[i] === 0) {
            queue.push(i);
        }
    }

    while (queue.length) {
        const course = queue.shift();
        result.push(course);
        graph[course].forEach(neighbor => {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) {
                queue.push(neighbor);
            }
        });
    }

    return numCourses === result.length ? result : [];
}


console.log(findOrder(2, [[1, 0]]));  
console.log(findOrder(4, [[1,0],[2,0],[3,1],[3,2]]));  
console.log(findOrder(1, []));  
