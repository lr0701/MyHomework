var isValid = function(s) {
    if (s.length % 2) { 
        return false;
    }
    const mp = {'(': ')', '[': ']', '{': '}'};
    const st = [];
    for (const c of s) {
        if (mp[c]) { 
            st.push(mp[c]); 
        } else if (st.length === 0 || st.pop() !== c) { 
            return false; 
        }
    }
    return st.length === 0; 
};
